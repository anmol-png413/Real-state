import { useNavigate } from "react-router-dom";
import SEO from "../Components/SEO";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center px-4 text-center">
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist. Return to AU Cosmos Corner homepage to explore 3 BHK and 5 BHK luxury flats in Siddharth Vihar, Ghaziabad."
        url="https://aucosmos.truelitestates.com/404"
      />

      <p className="text-yellow-500 text-xs font-bold tracking-[6px] uppercase mb-4">404 Error</p>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Page Not Found</h1>
      <p className="text-gray-400 text-base max-w-md mb-8 leading-relaxed">
        The page you're looking for doesn't exist. Let's take you back to explore
        <span className="text-yellow-400 font-semibold"> 3 BHK & 5 BHK luxury flats</span> at
        AU Cosmos Corner, Siddharth Vihar, Ghaziabad.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => navigate("/")}
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 text-sm tracking-widest uppercase transition-colors"
        >
          Back to Homepage
        </button>
        <a
          href="tel:9711557670"
          className="border border-gray-600 hover:border-yellow-500 text-white font-bold py-3 px-8 text-sm tracking-widest uppercase transition-colors"
        >
          📞 Call Us
        </a>
      </div>

      <div className="mt-12 flex gap-6 text-xs text-gray-600 uppercase tracking-widest">
        <button onClick={() => navigate("/about")} className="hover:text-yellow-500 transition-colors bg-transparent border-none cursor-pointer">About</button>
        <button onClick={() => navigate("/contact")} className="hover:text-yellow-500 transition-colors bg-transparent border-none cursor-pointer">Contact</button>
        <button onClick={() => navigate("/privacy-policy")} className="hover:text-yellow-500 transition-colors bg-transparent border-none cursor-pointer">Privacy</button>
      </div>
    </div>
  );
}
