import conceptImage from "../assets/images/home/concept-that-click.png";

export function ConceptsSection() {
  return (
    <section
      className="py-24 bg-[linear-gradient(90deg,rgb(248,248,248)0%,rgb(234,247,246)100%)]"
      data-purpose="feature-concepts"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative group flex items-center justify-center">
            <img
              src={conceptImage}
              alt="Concepts that click"
              className="w-full max-w-[440px] h-auto drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Concepts that click
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Step-by-step interactive lessons make even complex ideas feel
              intuitive. Custom, intelligent feedback catches mistakes as you
              learn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
