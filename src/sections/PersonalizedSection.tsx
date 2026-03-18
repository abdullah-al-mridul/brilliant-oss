import personalizedImage from "../assets/images/home/personalised-learing.png";

export function PersonalizedSection() {
  return (
    <section
      className="py-24 bg-linear-to-b from-[#fdfbff] to-[#faf8ff]"
      data-purpose="feature-personalized"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Personalized learning
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              BrilliantOSS tracks the concepts you've mastered, designs practice
              sets based on your progress, and adapts to your pace.
            </p>
          </div>
          <div className="relative group flex items-center justify-center">
            <img
              src={personalizedImage}
              alt="Personalized learning"
              className="w-full max-w-[440px] h-auto drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
