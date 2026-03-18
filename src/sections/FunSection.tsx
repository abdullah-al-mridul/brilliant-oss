import funImage from "../assets/images/home/more-effective.png";

export function FunSection() {
  return (
    <section
      className="py-24 bg-linear-to-b from-[#f0f9f8] to-[#e6f4f4]"
      data-purpose="feature-fun"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1 group flex items-center justify-center">
            <img
              src={funImage}
              alt="More effective, more fun"
              className="w-full max-w-[440px] h-auto drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-serif">
              More effective,
              <br />
              more fun
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              BrilliantOSS's interactive approach helps you master concepts in
              less time, with more purpose and joy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
