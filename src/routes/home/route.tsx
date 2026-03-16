import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { authStore } from "@/store/authStore";
import { useStore } from "@tanstack/preact-store";
import { useEffect } from "preact/hooks";

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
             <svg className="w-5 h-5 text-gray-100 fill-current" viewBox="0 0 24 24">
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
  <div className="bg-linear-to-br from-white to-[#fffef2] rounded-2xl p-6 border border-gray-100 shadow-sm">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 shrink-0 bg-linear-to-br from-indigo-500 via-purple-500 to-orange-400 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-100">
        <span className="text-white font-black text-xl italic">C</span>
      </div>
      <div>
        <h4 className="font-extrabold text-[15px] text-gray-900 leading-tight">Unlock all learning with Premium</h4>
        <p className="text-xs text-gray-500 font-medium mt-0.5">to get smarter, faster</p>
      </div>
    </div>
    <button className="w-full py-3.5 bg-linear-to-r from-[#9b87f5] to-[#f97316] text-white font-black rounded-full text-[15px] shadow-[0_4px_0_0_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-y-[2px] transition-all cursor-pointer">
      Explore Premium
    </button>
  </div>
);

const LeagueCard = () => (
  <div className="border border-gray-200 rounded-2xl p-10 bg-white text-center shadow-sm">
    <div className="flex justify-center mb-6">
       <div className="w-16 h-16 relative">
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <path d="M32 4L54 12V32C54 48 32 60 32 60C32 60 10 48 10 32V12L32 4Z" fill="#B45309" />
            <circle cx="32" cy="32" r="10" fill="#FDE68A" fillOpacity="0.3" />
            <path d="M32 24 L28 32 L32 40 L36 32 Z" fill="#FBBF24" />
          </svg>
       </div>
    </div>
    <h3 className="text-xl font-black text-gray-900 mb-2">Ready to bounce back?</h3>
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

  useEffect(() => {
    if (status === "unauthenticated") {
      navigate({ to: "/" });
    }
  }, [status, navigate]);

  return (
    <div className="min-h-screen bg-[#fafafa] pt-20 pb-20">
      {/* Premium Banner */}
      <div className="bg-[#fff1f2] py-2 border-b border-[#ffe4e6]">
        <div className="max-w-[1100px] mx-auto flex items-center justify-center gap-3 px-6">
          <div className="w-8 h-8 bg-linear-to-br from-indigo-500 via-purple-500 to-orange-400 rounded-lg flex items-center justify-center text-white text-[10px] font-black shadow-sm italic">C</div>
          <p className="text-[15px] font-bold text-gray-700">
            Subscribe to Premium and save 20%. <button className="underline text-gray-900 font-black hover:text-black cursor-pointer ml-1">Go Premium</button>
          </p>
        </div>
      </div>

      <main className="max-w-[1100px] mx-auto px-6 py-14 flex flex-col lg:flex-row gap-14">
        {/* Sidebar */}
        <aside className="w-full lg:w-[325px] shrink-0 space-y-10">
          <StreakCard />
          <PremiumCard />
          <LeagueCard />
        </aside>

        {/* Lesson Section */}
        <section className="grow flex flex-col items-center">
          <div className="relative w-full max-w-[580px]">
            {/* Stack Effect Background Cards */}
            <div className="absolute -right-2 top-3 bottom-3 w-full border border-gray-100 rounded-[32px] bg-white -z-10 shadow-xs"></div>
            <div className="absolute -right-4 top-6 bottom-6 w-full border border-gray-50 rounded-[32px] bg-white -z-20 shadow-xs"></div>
            
            {/* Main Lesson Card */}
            <div className="bg-white border border-gray-100 rounded-[32px] p-10 md:p-14 flex flex-col items-center text-center shadow-md shadow-gray-200/20">
              <h1 className="text-[32px] font-black text-gray-900 mb-1 tracking-tight">Arithmetic Thinking</h1>
              <span className="text-[#3B60FF] font-black text-[11px] tracking-[0.2em] uppercase mb-14">LEVEL 1</span>
              
              <div className="w-52 h-52 mb-16 relative flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 160 160" className="w-full h-full">
                   {/* Easel Stand */}
                   <path d="M80 120 L55 160 M105 120 L130 160" stroke="#78350F" strokeWidth="6" strokeLinecap="square" />
                   <path d="M80 120 L80 160" stroke="#78350F" strokeWidth="6" strokeLinecap="square" />
                   {/* Canvas */}
                   <rect x="30" y="30" width="100" height="90" fill="#3B60FF" rx="4" />
                   <rect x="42" y="42" width="22" height="22" fill="white" rx="2" />
                   <rect x="74" y="42" width="44" height="66" fill="#A5B4FC" rx="2" />
                   <rect x="42" y="80" width="22" height="28" fill="#C7D2FE" rx="2" />
                   <circle cx="110" cy="100" r="10" fill="#FBBF24" />
                </svg>
              </div>

              <div className="w-full space-y-3 mb-12">
                <button className="flex items-center justify-between w-full p-2.5 rounded-2xl hover:bg-gray-50 transition-colors group cursor-pointer text-left">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-[#3B60FF]/5 rounded-full flex items-center justify-center shadow-xs overflow-hidden p-2">
                       <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                          <circle cx="32" cy="50" r="12" fill="#4B5563" />
                          <rect x="16" y="24" width="32" height="20" rx="4" fill="#3B82F6" />
                          <circle cx="28" cy="30" r="2" fill="white" />
                          <circle cx="36" cy="30" r="2" fill="white" />
                       </svg>
                    </div>
                    <span className="font-extrabold text-[#111827] text-lg">Warm Up</span>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-gray-100"></div>
                </button>

                <div className="flex items-center justify-between w-full p-2.5 rounded-2xl opacity-40 grayscale">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center p-3">
                       <circle cx="32" cy="32" r="15" fill="#9CA3AF" />
                    </div>
                    <span className="font-extrabold text-gray-500 text-lg">Splitting and Combining</span>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-gray-100"></div>
                </div>
              </div>

              <button className="w-full py-4.5 bg-[#3B60FF] hover:bg-[#254EDB] text-white rounded-2xl font-black text-xl shadow-[0_5px_0_0_#254EDB] hover:shadow-none hover:translate-y-[2px] active:translate-y-[4px] transition-all cursor-pointer tracking-wide">
                Start
              </button>
            </div>
          </div>

          {/* Sub Navigation */}
          <div className="mt-14 flex gap-5 overflow-x-auto pb-4 w-full justify-center max-w-xl">
             <button className="w-16 h-16 shrink-0 border-2 border-[#3B60FF] rounded-2xl p-1 flex items-center justify-center bg-blue-50 shadow-sm shadow-blue-100 cursor-pointer">
                <div className="w-full h-full bg-[#3B60FF] rounded-xl flex items-center justify-center">
                   <svg viewBox="0 0 64 64" className="w-8 h-8"><rect x="10" y="10" width="44" height="44" fill="white" rx="4"/><rect x="18" y="18" width="10" height="10" fill="#3B60FF" rx="2"/><rect x="36" y="18" width="10" height="28" fill="#3B60FF" rx="2"/><rect x="18" y="36" width="10" height="10" fill="#FBBF24" rx="2"/></svg>
                </div>
             </button>
             {[1,2,3,4].map(i => (
               <button key={i} className="w-16 h-16 shrink-0 border border-gray-100 rounded-2xl p-1 flex items-center justify-center hover:bg-gray-50 bg-white cursor-pointer transition-all shadow-xs">
                 <div className="w-full h-full bg-gray-50 rounded-xl flex items-center justify-center opacity-70">
                    <svg viewBox="0 0 64 64" className="w-10 h-10"><path d="M10 10 L54 10 L54 54 L10 54 Z" fill="#E5E7EB"/></svg>
                 </div>
               </button>
             ))}
          </div>
        </section>
      </main>
    </div>
  );
}
