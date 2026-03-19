import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-preact";
import ArithmaticIMG from "@/assets/graphics/courses/arithmatic-thinking/1.png";

export const Route = createFileRoute("/courses/$courseId" as any)({
  component: CourseDetailComponent,
});

// Mockup data based on the screenshot
const COURSE_DATA = {
  title: "Arithmetic Thinking",
  description: "Learn to wield important tools in number sense and computation.",
  lessons: 92,
  exercises: 1214,
  image: ArithmaticIMG,
};

const PATH_NODES = [
  // Section 1
  { id: 1, title: "Visualize Fractions", type: "section_header", isActive: true },
  { id: 2, title: "Combining Parts", status: "completed" },
  { id: 3, title: "Splitting Parts", status: "completed" },
  { id: 4, title: "Splitting and Combining", status: "active" },
  { id: 5, title: "Equal Parts", status: "locked" },
  { id: 6, title: "Fraction Equivalence", status: "locked" },
  
  // Section 2
  { id: 7, title: "Advanced Operations", type: "section_header", isActive: false },
  { id: 8, title: "Multiplying Fractions", status: "locked" },
  { id: 9, title: "Dividing Fractions", status: "locked" },
  { id: 10, title: "Mixed Numbers", status: "locked" },
  { id: 11, title: "Complex Denominators", status: "locked" },
  
  // Section 3
  { id: 12, title: "Mastery Challenge", type: "section_header", isActive: false },
  { id: 13, title: "Word Problems", status: "locked" },
  { id: 14, title: "Final Assessment", status: "locked" },
];

function CourseDetailComponent() {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[380px_1fr] gap-8 md:gap-16">
        
        {/* Left Column: Course Card */}
        <aside className="relative">
          <div className="sticky top-32 bg-white rounded-[24px] p-8 border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="w-24 h-24 mb-6">
              <img src={COURSE_DATA.image} alt={COURSE_DATA.title} className="w-full h-full object-contain drop-shadow-md" />
            </div>
            <h1 className="text-[26px] font-bold text-slate-900 leading-tight mb-3">
              {COURSE_DATA.title}
            </h1>
            <p className="text-[15px] font-medium text-slate-500 leading-relaxed mb-6">
              {COURSE_DATA.description}
            </p>
            <div className="flex items-center gap-6 text-[13px] font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                </span>
                {COURSE_DATA.lessons} Lessons
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rotate-45 flex items-center justify-center">
                  <div className="w-2 h-2 bg-slate-700" />
                </span>
                {COURSE_DATA.exercises} Exercises
              </div>
            </div>
          </div>
        </aside>

        {/* Right Column: Pathway */}
        <main className="relative flex flex-col items-center py-10">
          
          <div className="flex flex-col items-center gap-y-12 relative w-full pt-4 pb-24">
            {/* SVG Pathway Connector (Mock) */}
            <div className="absolute top-16 bottom-16 left-1/2 -translate-x-1/2 w-[2px] bg-slate-100 -z-10" />

            {PATH_NODES.map((node, i) => {
              if (node.type === "section_header") {
                return (
                  <div key={node.id} className="w-full max-w-[320px] bg-white rounded-[24px] border-2 border-blue-500 p-4 text-center shadow-sm relative z-10 transition-transform mb-4">
                    <p className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-1">Level 1</p>
                    <h3 className="text-[17px] font-bold text-slate-900">{node.title}</h3>
                  </div>
                );
              }

              return (
                <div key={node.id} className="relative flex items-center justify-center w-full z-10 my-4 group cursor-pointer">
                  {/* Alternating alternating margins for curve effect */}
                  <div className={`flex flex-col items-center relative transition-transform duration-300 ${i % 2 === 0 ? '-translate-x-6' : 'translate-x-6'} hover:-translate-y-1`}>
                    
                    <div className="relative">
                      {node.status === "completed" && (
                        <div className="w-[72px] h-[36px] bg-[#E8EFFF] border-[3px] border-[#B5C8FB] rounded-[50%] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.05)] transform hover:scale-105 transition-transform isometric-button">
                           <Check className="text-blue-500" strokeWidth={4} size={18} />
                           {/* Decorative rings to mimic isometric look */}
                           <div className="absolute inset-0 border border-white/50 rounded-[50%]" />
                           <div className="absolute top-1 bottom-0 left-0 right-0 border-b-4 border-[#94ADF8] rounded-[50%] opacity-40 pointer-events-none" />
                        </div>
                      )}

                      {node.status === "active" && (
                        <div className="relative group/active">
                          {/* Pulsing ring */}
                          <div className="absolute -inset-4 border-2 border-blue-400 rounded-[50%] opacity-0 group-hover/active:opacity-100 animate-pulse transition-opacity" />
                          <div className="w-[86px] h-[48px] bg-linear-to-b from-blue-400 to-blue-600 border-[3px] border-white rounded-[50%] flex flex-col items-center justify-center shadow-[0_12px_24px_rgba(59,130,246,0.25)] transform hover:scale-105 transition-transform z-20 relative">
                             {/* Top glowing face */}
                             <div className="absolute top-[2px] left-[2px] right-[2px] h-[28px] bg-linear-to-b from-blue-300 to-blue-500 rounded-[50%] flex items-center justify-center border border-white/40">
                                <span className="w-4 h-4 bg-white/30 rounded-full" />
                             </div>
                          </div>
                          {/* Floating icon relative to active node */}
                          <div className="absolute -top-10 -right-4 animate-bounce z-30">
                            <div className="w-12 h-12 bg-green-500 rounded-2xl transform rotate-12 flex items-center justify-center shadow-lg border-2 border-white">
                                <div className="w-4 h-4 bg-white rounded-sm drop-shadow" />
                            </div>
                          </div>
                        </div>
                      )}

                      {node.status === "locked" && (
                        <div className="w-[72px] h-[36px] bg-slate-200 border-[3px] border-slate-300 rounded-[50%] flex items-center justify-center grayscale opacity-80 shadow-sm relative">
                          <div className="absolute top-1 bottom-0 left-0 right-0 border-b-4 border-slate-400/30 rounded-[50%] pointer-events-none" />
                        </div>
                      )}
                    </div>
                    
                    <span className={`absolute whitespace-nowrap text-[15px] font-semibold mt-1 transition-colors ${
                      node.status === "active" ? "text-slate-900 left-[110%] top-1/2 -translate-y-1/2" :
                      node.status === "completed" ? "text-slate-400/80 left-[120%] top-1/2 -translate-y-1/2" :
                      "text-slate-300 left-[120%] top-1/2 -translate-y-1/2"
                    }`}>
                      {node.title}
                    </span>

                  </div>
                </div>
              );
            })}
          </div>

        </main>
      </div>

      {/* Floating Action Menu (Aligned to Right Column) */}
      <div className="fixed bottom-6 left-0 right-0 w-full z-50 pointer-events-none">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[380px_1fr] gap-8 md:gap-16">
          {/* Empty left column to push the menu to the right */}
          <div className="hidden md:block"></div>
          
          {/* Menu perfectly centered in the right column */}
          <div className="flex justify-center pointer-events-auto">
            <div className="w-[90%] max-w-[420px] bg-white rounded-3xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-slate-100 animate-in slide-in-from-bottom-8 duration-500">
              <h4 className="text-[17px] font-bold text-center text-slate-900 mb-4">
                Splitting and Combining
              </h4>
              <a href="/courses/arithmatic-thinking/1">
                <button className="w-full bg-[#4669F2] hover:bg-[#3D5DE4] text-white font-bold text-[17px] py-[14px] rounded-[16px] shadow-[0_4px_0_#2B4CD2] active:shadow-none active:translate-y-1 transition-all">
                  Start
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
