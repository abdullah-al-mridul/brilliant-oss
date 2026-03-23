import { useState } from "preact/hooks";

interface Option {
  id: string;
  label: string;
  isCorrect?: boolean;
}

interface MultipleChoiceBlockProps {
  options: Option[];
  successMessage?: string;
  errorMessage?: string;
  onCorrect?: () => void;
}

export function MultipleChoiceBlock({ options, successMessage, errorMessage, onCorrect }: MultipleChoiceBlockProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (id: string) => {
    if (isSubmitted) return;
    setSelectedId(id);
  };

  const handleSubmit = () => {
    if (!selectedId) return;
    setIsSubmitted(true);
    const selected = options.find(o => o.id === selectedId);
    if (selected?.isCorrect && onCorrect) {
      onCorrect();
    }
  };

  const selectedOption = options.find(o => o.id === selectedId);
  const isCorrect = selectedOption?.isCorrect;

  return (
    <div className="multiple-choice-block mt-8 w-full max-w-[500px] mx-auto">
      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            disabled={isSubmitted}
            className={`w-full text-left p-5 rounded-[16px] border-2 transition-all font-bold text-[17px] relative overflow-hidden ${
              selectedId === option.id
                ? isSubmitted
                  ? isCorrect
                    ? "bg-green-50 border-green-500 text-green-700"
                    : "bg-red-50 border-red-500 text-red-700"
                  : "bg-blue-50 border-blue-500 text-blue-700"
                : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
            }`}
          >
            {option.label}
            {isSubmitted && option.isCorrect && selectedId !== option.id && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
                ✓
              </div>
            )}
          </button>
        ))}
      </div>

      {!isSubmitted ? (
        <button
          onClick={handleSubmit}
          disabled={!selectedId}
          className={`mt-6 w-full py-4 rounded-[16px] font-bold text-[18px] transition-all ${
            selectedId
              ? "bg-[#4669F2] text-white shadow-[0_4px_0_#2B4CD2] active:translate-y-1 active:shadow-none"
              : "bg-slate-200 text-slate-400 cursor-not-allowed"
          }`}
        >
          Check
        </button>
      ) : (
        <div className={`mt-6 p-4 rounded-[16px] border ${isCorrect ? "bg-green-50 border-green-100" : "bg-red-50 border-red-100"}`}>
          <p className={`text-center font-bold ${isCorrect ? "text-green-700" : "text-red-700"}`}>
            {isCorrect ? successMessage || "Correct!" : errorMessage || "Try again!"}
          </p>
          {(!isCorrect) && (
             <button 
                onClick={() => { setIsSubmitted(false); setSelectedId(null); }}
                className="mt-3 w-full text-center text-[15px] font-bold text-slate-500 hover:text-slate-700 underline"
             >
               Try Again
             </button>
          )}
        </div>
      )}
    </div>
  );
}
