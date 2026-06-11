/**
 * cleanup-test-leads.mjs
 * ─────────────────────────────────────────────────────────────────
 * Lists every row in Supabase `enquiries` where full_name starts with
 * "[TEST]", shows them in a table, asks for your confirmation, then
 * deletes ONLY those rows.
 *
 * Real leads are never touched — the filter is exact-prefix match.
 *
 * Usage:
 *   node tests/cleanup-test-leads.mjs
 *   npm run test:cleanup
 */

import { createClient } from "@supabase/supabase-js";
import readline from "readline";

const SUPABASE_URL      = "https://zmpjoxnsavmeeoabsskb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptcGpveG5zYXZtZWVvYWJzc2tiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc2OTg3NjgsImV4cCI6MjA5MzI3NDc2OH0.zvAhdB8VdRoTikWI763_GdhtJhiMcKMYRgRC2hmkylU";
const TEST_PREFIX       = "[TEST]";
const TABLE             = "enquiries";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function ask(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => rl.question(question, (ans) => { rl.close(); resolve(ans.trim()); }));
}

function printTable(rows) {
  const cols = ["id", "full_name", "phone", "source", "created_at"];
  const widths = cols.map((c) =>
    Math.max(c.length, ...rows.map((r) => String(r[c] ?? "").length))
  );

  const line = widths.map((w) => "─".repeat(w + 2)).join("┼");
  const header = cols.map((c, i) => ` ${c.padEnd(widths[i])} `).join("│");
  console.log("┌" + widths.map((w) => "─".repeat(w + 2)).join("┬") + "┐");
  console.log("│" + header + "│");
  console.log("├" + line + "┤");
  for (const row of rows) {
    const cells = cols.map((c, i) => ` ${String(row[c] ?? "").padEnd(widths[i])} `).join("│");
    console.log("│" + cells + "│");
  }
  console.log("└" + widths.map((w) => "─".repeat(w + 2)).join("┴") + "┘");
}

async function main() {
  console.log("\n🔍  Fetching test entries from Supabase...\n");

  const { data, error } = await supabase
    .from(TABLE)
    .select("id, full_name, phone, source, created_at")
    .like("full_name", `${TEST_PREFIX}%`)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("❌  Supabase error:", error.message);
    process.exit(1);
  }

  if (!data || data.length === 0) {
    console.log("✅  No test entries found. Nothing to delete.");
    process.exit(0);
  }

  console.log(`Found ${data.length} test entr${data.length === 1 ? "y" : "ies"}:\n`);
  printTable(data);

  const ids = data.map((r) => r.id);
  console.log(`\n⚠️   These ${ids.length} row(s) will be permanently deleted.`);
  console.log("    Real leads (names not starting with '[TEST]') are NOT affected.\n");

  const answer = await ask("Type  yes  to confirm deletion, anything else to cancel: ");

  if (answer.toLowerCase() !== "yes") {
    console.log("\n🚫  Cancelled. Nothing was deleted.");
    process.exit(0);
  }

  console.log("\n🗑️   Deleting test entries...");

  const { error: deleteError } = await supabase
    .from(TABLE)
    .delete()
    .in("id", ids);

  if (deleteError) {
    console.error("❌  Delete failed:", deleteError.message);
    process.exit(1);
  }

  console.log(`✅  Successfully deleted ${ids.length} test entr${ids.length === 1 ? "y" : "ies"}.`);
  console.log("    Your real leads are untouched.\n");
}

main();
