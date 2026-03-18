import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { authStore } from "@/store/authStore";
import { useStore } from "@tanstack/preact-store";
import { useEffect } from "preact/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { ChevronRight } from "lucide-preact";

// Graphics
import ArithmaticIMG from "@/assets/graphics/courses/arithmatic-thinking/1.png";
import DataIMG from "@/assets/graphics/courses/exploring-data/1.png";
import ScientificIMG from "@/assets/graphics/courses/scientific-thinking/1.png";

export const Route = createFileRoute("/courses" as any)({
  beforeLoad: () => {
    const state = authStore.state;
    if (state.status === "unauthenticated") {
      throw redirect({ to: "/" });
    }
  },
  component: CoursesComponent,
});

const COURSE_CATEGORIES = [
  {
    id: "programming-cs",
    title: "Programming & CS",
    subtitle: "Speak the language of computers",
    icon: (
      <div className="w-12 h-12 flex items-center justify-center shrink-0">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Base Layer */}
          <div className="absolute w-[80%] h-[40%] bg-[#5C2EB8] rounded blur-[2px] opacity-40 translate-y-3"></div>
          {/* Bottom Layer */}
          <div className="absolute w-[85%] h-[55%] bg-[#6a42d8] rounded-xl transform -skew-x-[20deg] border-t border-[#8964e7]"></div>
          {/* Middle Layer */}
          <div className="absolute w-[85%] h-[55%] bg-[#8155ee] rounded-xl transform -skew-x-[20deg] -translate-y-[6px] border-t border-[#9f79ff]"></div>
          {/* Top Layer */}
          <div className="absolute w-[85%] h-[55%] bg-[#a276ff] rounded-xl transform -skew-x-[20deg] -translate-y-[12px] flex items-center justify-center border-t border-[#c0a2ff] shadow-[0_2px_4px_rgba(0,0,0,0.1)]"></div>
        </div>
      </div>
    ),
    courses: [
      {
        id: "c1",
        title: "Thinking in Code",
        image: ArithmaticIMG,
        isNew: false,
      },
      {
        id: "c2",
        title: "Programming with Variables",
        image: ScientificIMG,
        isNew: false,
      },
      { id: "c3", title: "Thinking in Python", image: DataIMG, isNew: true },
      {
        id: "c4",
        title: "Programming with Functions",
        image: ArithmaticIMG,
        isNew: false,
      },
      {
        id: "c5",
        title: "Functions in Python",
        image: ScientificIMG,
        isNew: true,
      },
      { id: "c6", title: "Recursion in Python", image: DataIMG, isNew: true },
      { id: "c7", title: "Algorithms", image: ArithmaticIMG, isNew: false },
    ],
  },
  {
    id: "data-analysis",
    title: "Data Analysis",
    subtitle: "Know your stuff in probability and data analysis",
    icon: (
      <div className="w-12 h-12 flex items-center justify-center shrink-0">
        <div className="relative w-full h-full flex items-center justify-end flex-col">
          <div className="w-[85%] h-[40%] bg-[#DB7211] rounded-t-[10px] transform skew-y-[15deg] origin-bottom-left -ml-2 -mb-1 shadow-[inset_0_4px_6px_rgba(255,255,255,0.2)]"></div>
          <div className="absolute bottom-0 right-1 w-[75%] h-[80%] bg-[#EE8524] rounded-t-[14px] transform -skew-y-[20deg] origin-bottom-right z-10 border-l border-[#FFA34D] flex flex-col justify-end overflow-hidden pb-1">
            <div className="w-full h-1/2 bg-[#ff9d44]"></div>
          </div>
          <div className="absolute bottom-0 right-1 w-[75%] h-[30%] bg-[#CF6200] z-20 rounded-bl-[4px] rounded-br-[10px]"></div>
        </div>
      </div>
    ),
    courses: [
      { id: "d1", title: "Probability", image: DataIMG, isNew: false },
      { id: "d2", title: "Statistics", image: ArithmaticIMG, isNew: false },
      {
        id: "d3",
        title: "Data Distributions",
        image: ScientificIMG,
        isNew: false,
      },
      { id: "d4", title: "Hypothesis Testing", image: DataIMG, isNew: false },
      { id: "d5", title: "Bayesian Logic", image: ArithmaticIMG, isNew: false },
    ],
  },
];

function CoursesComponent() {
  const { status } = useStore(authStore);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "unauthenticated") {
      navigate({ to: "/" });
    }
  }, [status, navigate]);

  return (
    <div className="min-h-screen bg-[#fafafa] pt-28 pb-32 overflow-x-hidden">
      <main className="max-w-[1100px] mx-auto px-6 flex flex-col gap-16">
        {COURSE_CATEGORIES.map((category, catIdx) => (
          <section key={category.id} className="w-full relative">
            {/* Category Header */}
            <header className="flex items-center gap-5 mb-6">
              {category.icon}
              <div className="flex items-center gap-4 flex-wrap mt-2">
                <h2 className="text-[22px] font-extrabold text-gray-900 tracking-tight">
                  {category.title}
                </h2>
                <span className="text-[15px] font-medium text-gray-500">
                  {category.subtitle}
                </span>
              </div>
            </header>

            {/* Courses Slider Container */}
            <div className="relative w-full rounded-[24px] bg-[#f5f5f5] p-6 lg:p-8 border border-gray-100 shadow-[inset_0_0_10px_rgba(0,0,0,0.02)] overflow-hidden group">
              <div
                className={`swiper-button-next-${catIdx} hidden md:flex absolute font-bold w-10 h-10 bg-black text-white rounded-full shadow-lg items-center justify-center right-4 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer`}
              >
                <ChevronRight size={24} strokeWidth={3} className="ml-0.5" />
              </div>

              <Swiper
                modules={[Navigation, FreeMode]}
                freeMode={true}
                navigation={{
                  nextEl: `.swiper-button-next-${catIdx}`,
                  prevEl: null,
                }}
                slidesPerView="auto"
                spaceBetween={18}
                className="w-full !overflow-visible px-2 py-1 -mx-2 -my-1"
              >
                {category.courses.map((course) => (
                  <SwiperSlide key={course.id} style={{ width: "220px" }}>
                    <div className="bg-white rounded-[24px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-100/60 hover:border-gray-300 transition-all cursor-pointer flex flex-col group/card h-[310px] w-full overflow-hidden shrink-0">
                      {/* Image Container */}
                      <div className="w-full aspect-square relative flex items-center justify-center p-6 bg-white shrink-0">
                        {/* Border Separator simulating the screenshot's line through the middle. Note: The screenshot shows a horizontal line across the cards box, let's keep it simple with border. */}
                        {course.isNew && (
                          <div className="absolute top-4 right-4 z-10 bg-[#22C55E] text-white text-[11px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full shadow-[0_2px_4px_rgba(34,197,94,0.3)]">
                            NEW
                          </div>
                        )}
                        <div className="w-full h-full relative transition-transform duration-300 group-hover/card:scale-105 group-hover/card:-translate-y-1 flex items-center justify-center">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>

                      {/* Line Separator - Very subtle */}
                      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-100 to-transparent"></div>

                      {/* Title Container */}
                      <div className="px-5 py-4 flex flex-1 flex-col items-center justify-start bg-white">
                        <h3 className="text-[15px] font-extrabold text-gray-800 text-center leading-tight tracking-tight mt-1">
                          {course.title}
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Background connecting line (optional, mimicking screenshot's thin horizontal line) */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 -z-10 mt-[10px]"></div>
          </section>
        ))}
      </main>
    </div>
  );
}
