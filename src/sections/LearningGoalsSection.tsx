import { ChevronRight } from "lucide-preact";
import { categoryTabs } from "../data/navigation";
import { courses } from "../data/courses";
import { CategoryVisualization } from "../ui/CategoryVisualization";

interface LearningGoalsSectionProps {
  activeCategory: "Math" | "ComputerScience" | "DataAnalysis" | "Science";
  setActiveCategory: (
    category: "Math" | "ComputerScience" | "DataAnalysis" | "Science",
  ) => void;
}

export function LearningGoalsSection({
  activeCategory,
  setActiveCategory,
}: LearningGoalsSectionProps) {
  return (
    <section
      className="py-24 bg-linear-to-b from-[#1b1c1b] via-[#242926] to-[#2f352e] text-white"
      data-purpose="course-categories"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 font-serif">
          Reach big learning goals
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categoryTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveCategory(tab.key as any)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === tab.key
                  ? tab.activeClass
                  : "bg-white/10 hover:bg-white/20 hover:text-white text-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 bg-[#2d2d2d] rounded-4xl overflow-hidden text-left shadow-2xl border border-white/5 transition-all duration-300">
          <div className="p-12 md:p-16">
            <h3 className="text-2xl font-bold mb-8 font-serif transition-colors">
              {activeCategory === "ComputerScience"
                ? "Computer Science"
                : activeCategory === "DataAnalysis"
                  ? "Data Analysis"
                  : activeCategory}{" "}
              Courses
            </h3>
            <ul className="space-y-4 text-gray-400 font-medium">
              {courses[activeCategory].map((course: any, index: number) => {
                const IconComponent = course.icon;
                return (
                  <li
                    key={index}
                    className="hover:text-white cursor-pointer transition-all flex items-center gap-3 group hover:translate-x-1"
                  >
                    <div className="w-6 h-6 rounded-md bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                      <IconComponent size={14} />
                    </div>
                    {course.name}
                  </li>
                );
              })}
              <li className="text-sm text-gray-500 mt-8 cursor-pointer hover:text-gray-300 flex items-center gap-1 group w-max transition-colors">
                4 additional courses{" "}
                <ChevronRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </li>
            </ul>
          </div>
          <div className="bg-white/5 p-12 flex items-center justify-center relative border-l border-white/5">
            <CategoryVisualization category={activeCategory} />
            <div className="absolute bottom-8 right-8 text-white/5 font-bold text-4xl italic uppercase tracking-wider select-none pointer-events-none transition-all duration-500">
              {activeCategory === "ComputerScience"
                ? "Python"
                : activeCategory === "DataAnalysis"
                  ? "DATA"
                  : activeCategory === "Math"
                    ? "CALCULUS"
                    : "PHYSICS"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
