import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { authStore } from "@/store/authStore";
import { useStore } from "@tanstack/preact-store";
import { useEffect, useState, useRef } from "preact/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/swiper-bundle.css";
import ArithmaticIMG from "@/assets/graphics/courses/arithmatic-thinking/1.png";
import { hexToRgba } from "@/utils/color-converter";
import { Gem, Zap } from "lucide-preact";

export const Route = createFileRoute("/home" as any)({
  beforeLoad: () => {
    const state = authStore.state;
    if (state.status === "unauthenticated") {
      throw redirect({
        to: "/",
      });
    }
  },
  component: HomeComponent,
});

const COURSES = [
  {
    id: "arithmetic",
    title: "Arithmetic Thinking",
    level: "RECOMMENDED",
    title2: "LEVEL 1",
    color: "#456DFF",
    shadowColor: "#254EDB",
    icon: ArithmaticIMG,
    lessons: [
      { title: "Warm Up", completed: true },
      { title: "Splitting and Combining", completed: false },
    ],
  },
  {
    id: "data",
    title: "Exploring Data Visually",
    level: "RECOMMENDED",
    title2: "LEVEL 1",
    color: "#F97316",
    shadowColor: "#C2410C",

    lessons: [
      { title: "Reading Bar Charts", completed: true },
      { title: "Analyzing Bar Charts", completed: false },
    ],
  },
  {
    id: "scientific",
    title: "Scientific Thinking",
    level: "RECOMMENDED",
    title2: "LEVEL 1",
    color: "#EAB308",
    shadowColor: "#A16207",

    lessons: [
      { title: "Connecting Gears", completed: true },
      { title: "Gears Changing Speeds", completed: false },
    ],
  },
  {
    id: "probability",
    title: "Probability and Chance",
    level: "RECOMMENDED",
    title2: "LEVEL 1",
    color: "#3B60FF",
    shadowColor: "#254EDB",

    lessons: [
      { title: "Comparing Likelihoods", completed: true },
      { title: "Multiple Decks", completed: false },
    ],
  },
  {
    id: "coordinates",
    title: "Coordinate Plane",
    level: "RECOMMENDED",
    title2: "LEVEL 1",
    color: "#3B60FF",
    shadowColor: "#254EDB",

    lessons: [
      { title: "Coordinates", completed: true },
      { title: "Coordinate Pairs", completed: false },
    ],
  },
];

const StreakCard = () => (
  <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center gap-2">
        <span className="text-5xl font-extrabold text-gray-900">0</span>
        <Zap size={32} fill="currentColor" className="text-yellow-500" />
      </div>
    </div>
    <p className="text-sm font-bold mb-8 text-gray-900 leading-tight">
      Solve <span className="text-gray-900">3 problems</span> to start a streak
    </p>
    <div className="flex justify-between items-center px-0.5">
      {["T", "W", "Th", "F", "S"].map((day, i) => (
        <div key={i} className="flex flex-col items-center space-y-2.5">
          <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center">
            <Zap size={16} fill="currentColor" className="text-gray-300" />
          </div>
          <span className="text-[11px] font-bold text-gray-900">{day}</span>
        </div>
      ))}
    </div>
  </div>
);

const PremiumCard = () => (
  <div className="rounded-2xl p-5 border border-gray-100 shadow-sm relative overflow-hidden">
    <div className="absolute inset-0 bg-linear-to-br from-indigo-50/50 via-white to-orange-50/50 z-0"></div>
    <div className="relative z-10 flex flex-col items-start w-full">
      <div className="flex items-center gap-3 w-full mb-4">
        <div className="w-12 h-10 bg-linear-to-r from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center text-white shrink-0">
          <Gem />
        </div>
        <div className="flex-1">
          <h3 className="text-[13px] font-bold text-gray-900 leading-tight mb-0.5">
            Unlock all learning with Premium
          </h3>
          <p className="text-xs text-gray-600">
            This is an open-source project, so no premium is required.
          </p>
        </div>
      </div>
      <button className="w-full py-2.5 rounded-full bg-linear-to-r from-indigo-400 via-purple-400 to-amber-400 text-gray-900 font-bold text-sm hover:opacity-90 cursor-pointer transition-opacity shadow-sm">
        Premium? Haha!
      </button>
    </div>
  </div>
);

function HomeComponent() {
  const { status } = useStore(authStore);
  const navigate = useNavigate();

  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (status === "unauthenticated") {
      navigate({ to: "/" });
    }
  }, [status, navigate]);

  return (
    <div className="min-h-screen bg-[#fafafa] pt-20 pb-20 overflow-x-hidden">
      <main className="max-w-[1100px] mx-auto px-6 py-14 flex flex-col lg:flex-row gap-14">
        {/* Sidebar */}
        <aside className="w-full lg:w-[325px] shrink-0 space-y-5">
          <StreakCard />
          <PremiumCard />
          {/* <LeagueCard /> */}
        </aside>

        {/* Lesson Section */}
        <section className="grow flex flex-col items-center pt-2 min-w-0">
          <div className="relative w-full max-w-[580px]">
            {/* Main Lesson Card Swiper */}
            <div className="w-full relative z-0">
              <Swiper
                effect="cards"
                grabCursor={true}
                modules={[EffectCards]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                spaceBetween={0}
                slidesPerView={1}
                allowTouchMove={true}
                className="w-full"
              >
                {COURSES.map((course: any) => (
                  <SwiperSlide key={course.id} className="w-full">
                    <div className="border bg-white  border-[#CCCCCC] rounded-[16px] overflow-hidden py-10 md:py-8 px-5 md:px-4 flex flex-col items-center text-center">
                      <span
                        className="font-black text-[10px] tracking-widest mb-2 px-3 py-1 rounded-full uppercase"
                        style={{
                          color: course.color,
                          backgroundColor: `${course.color}15`,
                        }}
                      >
                        {course.level}
                      </span>
                      <h1 className="text-[24px] font-black text-gray-900 mb-2 tracking-tight">
                        {course.title}
                      </h1>
                      <span
                        className="font-black text-[12px] tracking-[0.2em] uppercase "
                        style={{ color: course.color }}
                      >
                        {course.title2}
                      </span>

                      <div className="w-36 h-36 my-7 relative flex items-center justify-center overflow-hidden">
                        {/* <course.Icon className="w-full h-full" /> */}
                        <img src={course.icon} alt={course.title} />
                      </div>

                      <div className="w-full">
                        {course.lessons.map((lesson: any, idx: number) => (
                          <div
                            key={idx}
                            className={`flex items-center justify-between w-full h-16 rounded-2xl transition-colors ${
                              lesson.completed
                                ? "cursor-pointer group"
                                : " grayscale"
                            }`}
                          >
                            <div className="flex items-center gap-6">
                              <div
                                className={`w-14 h-14 flex items-center justify-center overflow-hidden ${
                                  lesson.completed ? "p-2" : ""
                                }`}
                                // style={{
                                //   backgroundColor: lesson.completed
                                //     ? `${course.color}15`
                                //     : "",
                                // }}
                              >
                                {lesson.completed ? <div></div> : <div></div>}
                              </div>
                              <span
                                className={`font-extrabold ${lesson.completed ? "text-[#111827]" : "text-black/60 font-thin"}`}
                              >
                                {lesson.title}
                              </span>
                            </div>
                            <div className="w-4 h-4 rounded-full bg-gray-100 shadow-inner"></div>
                          </div>
                        ))}
                      </div>

                      <button
                        className="flex-1 py-[16px] px-8 text-white text-[18px] rounded-[60px] btn-custom w-full hover:translate-y-[2px] active:translate-y-[4px] transition-all cursor-pointer "
                        style={{
                          "--shadow-color": course.shadowColor,
                          "--shadow-hover": course.shadowColor,
                          backgroundColor: course.color,
                        }}
                      >
                        Start
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Sub Navigation */}
          <div className="mt-5 flex gap-5 overflow-x-auto pb-4 w-full justify-center max-w-xl">
            {COURSES.map((course, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={course.id}
                  onClick={() => swiperRef.current?.slideTo(index)}
                  className={` shrink-0 rounded-[8px] py-2.5 px-5 flex items-center justify-center cursor-pointer border transition-all  ${
                    isActive ? "" : ""
                  }`}
                  style={{
                    borderColor: isActive ? course.color : "rgba(0,0,0,0.1)",
                    backgroundColor: isActive
                      ? hexToRgba(course.color, 0.1)
                      : "",
                  }}
                >
                  <div
                    className={`w-full h-full rounded-xl flex items-center justify-center ${isActive ? "" : ""}`}
                  >
                    <div className="w-10 h-10">
                      <img
                        src={course.icon}
                        alt={course.title}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
