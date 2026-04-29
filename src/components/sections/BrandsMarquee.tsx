import { brands } from "@/lib/data";

export default function BrandsMarquee() {
  const doubled = [...brands, ...brands];
  return (
    <section className="py-8 border-y border-gray-100 overflow-hidden bg-white">
      <div className="container mb-4">
        <p className="text-xs font-bold uppercase tracking-widest text-center text-gray-400">
          Equipment Brands We Carry
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="marquee-track">
          {doubled.map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex-shrink-0 px-10 flex items-center"
            >
              <span
                className="text-sm font-bold whitespace-nowrap"
                style={{ color: "var(--navy)", opacity: 0.55 }}
              >
                {brand}
              </span>
              <span className="ml-10 w-1 h-1 rounded-full bg-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
