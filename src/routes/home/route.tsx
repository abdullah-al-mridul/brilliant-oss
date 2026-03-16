import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { authStore } from "@/store/authStore";
import { useStore } from "@tanstack/preact-store";
import { useEffect, useState, useRef } from "preact/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/swiper-bundle.css";

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

const EaselSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 160 160" className={className}>
    <path d="M80 120 L55 160 M105 120 L130 160" stroke="#78350F" strokeWidth="6" strokeLinecap="square" />
    <path d="M80 120 L80 160" stroke="#78350F" strokeWidth="6" strokeLinecap="square" />
    <rect x="30" y="30" width="100" height="90" fill="#3B60FF" rx="4" />
    <rect x="42" y="42" width="22" height="22" fill="white" rx="2" />
    <rect x="74" y="42" width="44" height="66" fill="#A5B4FC" rx="2" />
    <rect x="42" y="80" width="22" height="28" fill="#C7D2FE" rx="2" />
    <circle cx="110" cy="100" r="10" fill="#FBBF24" />
  </svg>
);

const DataSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 160 160" className={className}>
    <rect x="40" y="20" width="80" height="120" fill="#FDBA74" rx="4" />
    <rect x="45" y="20" width="70" height="120" fill="#FED7AA" rx="4" />
    <path d="M40 40h-10M40 80h-10M40 120h-10" stroke="#78350F" strokeWidth="6" strokeLinecap="round" />
    <circle cx="80" cy="60" r="25" fill="#C2410C" />
    <path d="M80 60 L105 50 A25 25 0 0 0 80 35 Z" fill="#EA580C" />
    <path d="M80 60 L60 80 A25 25 0 0 0 105 60 Z" fill="#9A3412" />
    <rect x="60" y="100" width="40" height="8" fill="#F97316" rx="4" />
    <rect x="60" y="115" width="25" height="8" fill="#EA580C" rx="4" />
    <path d="M125 40 L115 110 L120 125 L125 110 Z" fill="#FBBF24" />
    <path d="M115 40 L125 40 L125 50 L115 50 Z" fill="#A78BFA" />
  </svg>
);

const ScienceSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 160 160" className={className}>
    <circle cx="80" cy="80" r="45" fill="#EAB308" stroke="#CA8A04" strokeWidth="6" strokeDasharray="15 10" />
    <circle cx="80" cy="80" r="35" fill="#FEF08A" />
    <circle cx="120" cy="40" r="20" fill="#60A5FA" stroke="#3B82F6" strokeWidth="4" strokeDasharray="10 8" />
    <path d="M65 80 A15 15 0 0 1 95 80 L90 100 L70 100 Z" fill="#fff" />
    <circle cx="80" cy="70" r="20" fill="#fff" />
    <rect x="72" y="102" width="16" height="10" fill="#94A3B8" rx="2" />
    <path d="M76 114h8" stroke="#64748B" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const ProbabilitySVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 160 160" className={className}>
    <ellipse cx="100" cy="50" rx="35" ry="25" fill="#FDE047" stroke="#EAB308" strokeWidth="4" />
    <ellipse cx="100" cy="47" rx="25" ry="15" fill="#FEF08A" />
    <path d="M95 40 Q105 35 110 45 Q115 55 100 55" stroke="#CA8A04" strokeWidth="3" fill="none" />
    <path d="M85 30 Q120 10 135 40" stroke="#FEF08A" strokeWidth="6" fill="none" opacity="0.6" strokeLinecap="round" />
    
    <path d="M40 90 L60 70 L100 80 L80 100 Z" fill="#60A5FA" />
    <path d="M40 90 L80 100 L80 140 L40 130 Z" fill="#3B82F6" />
    <path d="M100 80 L80 100 L80 140 L100 120 Z" fill="#2563EB" />
    <circle cx="55" cy="110" r="4" fill="#fff" />
    <circle cx="65" cy="125" r="4" fill="#fff" />
    <circle cx="70" cy="85" r="4" fill="#fff" />
    <circle cx="90" cy="120" r="4" fill="#fff" />
    <circle cx="90" cy="100" r="4" fill="#fff" />
  </svg>
);

const CoordinateSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 160 160" className={className}>
    <rect x="40" y="40" width="80" height="80" fill="#60A5FA" rx="16" />
    <rect x="48" y="48" width="64" height="64" fill="#3B82F6" rx="8" />
    <path d="M64 48v64M80 48v64M96 48v64" stroke="#93C5FD" strokeWidth="2" opacity="0.5" />
    <path d="M48 64h64M48 80h64M48 96h64" stroke="#93C5FD" strokeWidth="2" opacity="0.5" />
    <rect x="64" y="64" width="32" height="32" fill="#FBBF24" />
    <path d="M48 112L112 48" stroke="#fff" strokeWidth="2" strokeDasharray="4 4" />
    <g transform="translate(100, 75) rotate(45)">
      <path d="M0 0 L-20 0" stroke="#EAB308" strokeWidth="4" />
      <polygon points="0,-4 10,0 0,4" fill="#1E3A8A" />
      <polygon points="-20,-5 -15,0 -20,5 -25,0" fill="#1E3A8A" />
    </g>
    <g transform="translate(64, 48) rotate(-135)">
      <path d="M0 0 L-20 0" stroke="#E5E7EB" strokeWidth="4" />
      <polygon points="0,-4 10,0 0,4" fill="#1E3A8A" />
      <polygon points="-20,-5 -15,0 -20,5 -25,0" fill="#1E3A8A" />
    </g>
  </svg>
);

const COURSES = [
  {
    id: "arithmetic",
    title: "Arithmetic Thinking",
    level: "RECOMMENDED",
    title2: "LEVEL 1",
    color: "#3B60FF",
    shadowColor: "#254EDB",
    Icon: EaselSVG,
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
    Icon: DataSVG,
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
    Icon: ScienceSVG,
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
    Icon: ProbabilitySVG,
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
    Icon: CoordinateSVG,
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
        <svg className="w-8 h-8 text-gray-100 fill-current" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14H11V21L20 10H13Z" />
        </svg>
      </div>
      <div className="flex gap-1.5 pt-2">
        <div className="w-3.5 h-5 bg-gray-50 border border-gray-100 rounded-[3px]"></div>
        <div className="w-3.5 h-5 bg-gray-50 border border-gray-100 rounded-[3px]"></div>
      </div>
    </div>
    <p className="text-sm font-bold mb-8 text-gray-900 leading-tight">
      Solve <span className="text-gray-900">3 problems</span> to start a streak
    </p>
    <div className="flex justify-between items-center px-0.5">
      {["T", "W", "Th", "F", "S"].map((day, i) => (
        <div key={i} className="flex flex-col items-center space-y-2.5">
          <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-gray-100 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M13 10V3L4 14H11V21L20 10H13Z" />
            </svg>
          </div>
          <span className="text-[11px] font-bold text-gray-900">{day}</span>
        </div>
      ))}
    </div>
  </div>
);

const PremiumCard = () => (
  <div className="rounded-2xl p-5 border border-gray-100 shadow-sm relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-orange-50/50 z-0"></div>
    <div className="relative z-10 flex flex-col items-start w-full">
      <div className="flex items-center gap-3 w-full mb-4">
        <div className="w-12 h-10 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center text-white shrink-0">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-[13px] font-bold text-gray-900 leading-tight mb-0.5">
            Unlock all learning with Premium
          </h3>
          <p className="text-xs text-gray-600">to get smarter, faster</p>
        </div>
      </div>
      <button className="w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-amber-400 text-gray-900 font-bold text-sm hover:opacity-90 transition-opacity shadow-sm">
        Explore Premium
      </button>
    </div>
  </div>
);

const LeagueCard = () => (
  <div className="border border-gray-200 rounded-2xl p-10 bg-white text-center shadow-sm">
    <div className="flex justify-center mb-6">
      <div className="w-16 h-16 relative">
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <path
            d="M32 4L54 12V32C54 48 32 60 32 60C32 60 10 48 10 32V12L32 4Z"
            fill="#B45309"
          />
          <circle cx="32" cy="32" r="10" fill="#FDE68A" fillOpacity="0.3" />
          <path d="M32 24 L28 32 L32 40 L36 32 Z" fill="#FBBF24" />
        </svg>
      </div>
    </div>
    <h3 className="text-xl font-black text-gray-900 mb-2">
      Ready to bounce back?
    </h3>
    <p className="text-sm text-gray-500 font-medium mb-10 leading-relaxed px-4">
      You finished #26 and kept your spot in the Hydrogen League
    </p>
    <button className="w-full py-3.5 rounded-full border border-gray-200 font-black text-gray-900 hover:bg-gray-50 shadow-[0_3px_0_0_#F3F4F6] hover:shadow-none hover:translate-y-px transition-all cursor-pointer text-sm">
      Continue
    </button>
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
          <LeagueCard />
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
                    <div className="bg-white border border-gray-100 rounded-[32px] shadow-md shadow-gray-200/40 overflow-hidden p-10 md:p-14 flex flex-col items-center text-center">
                      <span
                        className="font-[900] text-[10px] tracking-[0.1em] mb-3 px-3 py-1 rounded-full uppercase"
                        style={{ color: course.color, backgroundColor: `${course.color}15` }}
                      >
                        {course.level}
                      </span>
                      <h1 className="text-[32px] font-black text-gray-900 mb-2 tracking-tight">
                        {course.title}
                      </h1>
                      <span 
                        className="font-black text-[11px] tracking-[0.2em] uppercase mb-12"
                        style={{ color: course.color }}
                      >
                        {course.title2}
                      </span>

              <div className="w-52 h-52 mb-16 relative flex items-center justify-center overflow-hidden">
                        <course.Icon className="w-full h-full float-anim" />
                      </div>

                      <div className="w-full space-y-3 mb-10">
                        {course.lessons.map((lesson: any, idx: number) => (
                          <div
                            key={idx}
                            className={`flex items-center justify-between w-full p-2.5 rounded-2xl transition-colors ${
                              lesson.completed
                                ? "hover:bg-gray-50 cursor-pointer group"
                                : "opacity-40 grayscale"
                            }`}
                          >
                            <div className="flex items-center gap-6">
                              <div
                                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xs overflow-hidden ${
                                  lesson.completed ? "p-2" : "bg-gray-100 p-3"
                                }`}
                                style={{
                                  backgroundColor: lesson.completed ? `${course.color}15` : ""
                                }}
                              >
                                {lesson.completed ? (
                                  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                                    <circle cx="32" cy="50" r="12" fill="#4B5563" />
                                    <rect x="16" y="24" width="32" height="20" rx="4" fill={course.color} />
                                    <circle cx="28" cy="30" r="2" fill="white" />
                                    <circle cx="36" cy="30" r="2" fill="white" />
                                  </svg>
                                ) : (
                                  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                                    <circle cx="32" cy="32" r="15" fill="#9CA3AF" />
                                  </svg>
                                )}
                              </div>
                              <span className={`font-extrabold text-lg ${lesson.completed ? "text-[#111827]" : "text-gray-500"}`}>
                                {lesson.title}
                              </span>
                            </div>
                            <div className="w-4 h-4 rounded-full bg-gray-100 shadow-inner"></div>
                          </div>
                        ))}
                      </div>

                      <button 
                        className="w-full py-4.5 text-white rounded-2xl font-black text-xl hover:translate-y-[2px] active:translate-y-[4px] transition-all cursor-pointer tracking-wide hover:opacity-95"
                        style={{
                          backgroundColor: course.color,
                          boxShadow: `0 5px 0 0 ${course.shadowColor}`,
                          marginBottom: course.shadowColor ? "5px" : "0" // reserve space for translate
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
          <div className="mt-14 flex gap-5 overflow-x-auto pb-4 w-full justify-center max-w-xl">
            {COURSES.map((course, index) => {
              const isActive = index === activeIndex;
              const { Icon } = course;
              return (
                <button
                  key={course.id}
                  onClick={() => swiperRef.current?.slideTo(index)}
                  className={`w-16 h-16 shrink-0 rounded-2xl p-1 flex items-center justify-center cursor-pointer transition-all shadow-sm ${
                    isActive ? "border-2 bg-white" : "border border-gray-100 bg-white hover:bg-gray-50 shadow-xs hover:-translate-y-1"
                  }`}
                  style={{ borderColor: isActive ? course.color : "#F3F4F6" }}
                >
                  <div 
                    className={`w-full h-full rounded-xl flex items-center justify-center ${isActive ? '' : 'opacity-70 bg-gray-50'}`}
                    style={{ backgroundColor: isActive ? `${course.color}15` : "" }}
                  >
                    <div className="w-10 h-10">
                      <Icon className="w-full h-full drop-shadow-sm" />
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
