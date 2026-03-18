import guidedImage from "../assets/images/home/guided-lessons.png";

export function GuidedSection() {
  return (
    <section
      className="py-24 bg-linear-to-b from-[#f7f2fb] to-[#f4ebfa]"
      data-purpose="feature-guided"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group flex items-center justify-center">
            <img
              src={guidedImage}
              alt="Guided lessons"
              className="w-full max-w-[440px] h-auto drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Guided lessons
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Stay on track, see your progress, and build your problem solving
              skills one concept at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
