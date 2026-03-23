import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "preact/hooks";
import { SlideRenderer } from "@/game/SlideRenderer";
import { ChevronLeft, ChevronRight, X } from "lucide-preact";

export const Route = createFileRoute("/courses/$courseId/$levelId" as any)({
  component: LevelView,
});

function LevelView() {
  const { courseId, levelId } = Route.useParams() as any;
  const [levelData, setLevelData] = useState<any>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLevel = async () => {
      try {
        setLoading(true);
        // Now that the 'courses' folder is in 'src/courses', we can import easily.
        // We'll use a dynamic import based on the param pattern.
        // For protection, we'll validate the paths.
        
        // Using root-relative path for import.meta.glob
        const modules = import.meta.glob('/src/courses/**/*.json');
        const path = `/src/courses/${courseId}/${levelId}/level-${levelId}.json`;
        
        if (modules[path]) {
           const module: any = await modules[path]();
           setLevelData(module.default || module);
        } else {
           console.error("Module not found at path:", path);
           console.log("Available modules:", Object.keys(modules));
           setLevelData(null);
        }
      } catch (err) {
        console.error("Failed to load level:", err);
      } finally {
        setLoading(false);
      }
    };

    if (courseId && levelId) {
      loadLevel();
    }
  }, [courseId, levelId]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!levelData) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Level not found</h2>
      <p className="text-slate-500 mb-6">Could not load content for {courseId} / Level {levelId}</p>
      <a href="/courses" className="text-blue-500 hover:underline">Back to Courses</a>
    </div>
  );

  const slides = levelData.slides || [];
  const currentSlide = slides[currentSlideIndex];
  const progress = ((currentSlideIndex + 1) / slides.length) * 100;

  const nextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col z-50 relative">
      {/* Header / Progress Bar */}
      <header className="px-6 py-4 flex items-center gap-6 border-b border-slate-100 bg-white sticky top-0 z-10">
        <a href={`/courses/${courseId}`} className="text-slate-400 hover:text-slate-600 transition-colors">
          <X size={24} />
        </a>
        <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-green-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center gap-1">
           <span className="w-5 h-5 bg-amber-400 rounded-full" />
           <span className="text-[15px] font-bold text-slate-800">12</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-6">
        <div className="max-w-3xl mx-auto py-12">
          {currentSlide && (
            <div key={currentSlide.slideId} className="animate-in fade-in slide-in-from-right-8 duration-500">
              <SlideRenderer blocks={currentSlide.blocks} />
            </div>
          )}
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="px-6 py-8 border-t border-slate-100 flex justify-center bg-white sticky bottom-0 z-10">
        <div className="max-w-3xl w-full flex justify-between items-center gap-4">
           <button 
             onClick={prevSlide}
             disabled={currentSlideIndex === 0}
             className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-[16px] transition-all border-2 ${
               currentSlideIndex === 0 
                ? "opacity-0 pointer-events-none" 
                : "border-slate-200 text-slate-500 hover:bg-slate-50"
             }`}
           >
             <ChevronLeft size={20} />
             Previous
           </button>

           {currentSlideIndex < slides.length - 1 ? (
             <button 
               onClick={nextSlide}
               className="bg-[#4669F2] hover:bg-[#3D5DE4] text-white px-10 py-4 rounded-[16px] font-bold text-[18px] shadow-[0_4px_0_#2B4CD2] active:shadow-none active:translate-y-1 transition-all flex items-center gap-2"
             >
               Continue
               <ChevronRight size={20} strokeWidth={3} />
             </button>
           ) : (
             <a href={`/courses/${courseId}`}>
               <button className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-[16px] font-bold text-[18px] shadow-[0_4px_0_#15803d] active:shadow-none active:translate-y-1 transition-all">
                 Finish Level
               </button>
             </a>
           )}
        </div>
      </footer>
    </div>
  );
}
