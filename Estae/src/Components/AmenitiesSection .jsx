const AmenitiesSection = () => {
  const amenities = [
    {
      name: "Gymnasium",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop",
    },
    {
      name: "Swimming Pool",
      image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600&auto=format&fit=crop",
    },
    {
      name: "Jogging Track",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&auto=format&fit=crop",
    },
    {
      name: "Yoga & Meditation Center",
      image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&auto=format&fit=crop",
    },
    {
      name: "Clubhouse",
      image: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=600&auto=format&fit=crop",
    },
    {
      name: "Banquet Hall",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&auto=format&fit=crop",
    },
    {
      name: "Covered Parking",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600&auto=format&fit=crop",
    },
    {
      name: "Landscaped Garden",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-16 px-6 md:px-12 lg:px-16" id="amenities">

      {/* ── Title ── */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 uppercase tracking-widest">
          AMENITIES
        </h2>
        <div className="w-32 h-[3px] bg-yellow-500 mx-auto mt-4" />
      </div>

      {/* ── Row 1 — 4 cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {amenities.slice(0, 4).map((item, i) => (
          <div
            key={i}
            className="relative overflow-hidden cursor-pointer group rounded-sm"
            style={{ height: "220px" }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full px-4 py-3">
              <p className="text-white font-bold text-base md:text-lg tracking-wide">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Row 2 — 4 cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {amenities.slice(4, 8).map((item, i) => (
          <div
            key={i}
            className="relative overflow-hidden cursor-pointer group rounded-sm"
            style={{ height: "220px" }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full px-4 py-3">
              <p className="text-white font-bold text-base md:text-lg tracking-wide">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default AmenitiesSection;