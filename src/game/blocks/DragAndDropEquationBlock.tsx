import { useState } from "preact/hooks";

interface AvailableBlock {
  id: string;
  label: string;
}

interface DragAndDropEquationBlockProps {
  equationTemplate: string;
  availableBlocks: AvailableBlock[];
  correctAnswer: Record<string, string>;
  successMessage?: string;
  errorMessage?: string;
}

export function DragAndDropEquationBlock({
  equationTemplate,
  availableBlocks,
  correctAnswer,
  successMessage,
  errorMessage,
}: DragAndDropEquationBlockProps) {
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleBlockSelect = (blockId: string) => {
    if (isSubmitted) return;
    // For simplicity, we assume one drop zone [DROP_ZONE_1]
    setSelections({ ...selections, DROP_ZONE_1: blockId });
    setError(false);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    const isCorrect = Object.keys(correctAnswer).every(
      (key) => correctAnswer[key] === selections[key]
    );
    if (!isCorrect) {
      setError(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setSelections({});
      }, 1500);
    }
  };

  const renderTemplate = () => {
    const parts = equationTemplate.split(/(\[DROP_ZONE_\d+\])/g);
    return parts.map((part, i) => {
      if (part.startsWith("[DROP_ZONE_")) {
        const zoneId = part.slice(1, -1);
        const selectedBlockId = selections[zoneId];
        const selectedBlock = availableBlocks.find((b) => b.id === selectedBlockId);

        return (
          <div
            key={i}
            className={`inline-flex items-center justify-center w-12 h-12 mx-2 rounded-xl border-2 border-dashed transition-all ${
              selectedBlock
                ? "border-blue-500 bg-blue-50 text-blue-700 font-bold text-xl"
                : "border-slate-300 bg-slate-50"
            } ${error && "border-red-500 bg-red-50 animate-shake"}`}
          >
            {selectedBlock?.label || ""}
          </div>
        );
      }
      return <span key={i} className="text-3xl font-bold text-slate-800 font-serif">{part}</span>;
    });
  };

  const isAllFilled = Object.keys(correctAnswer).every((key) => selections[key]);

  return (
    <div className="drag-and-drop-block mt-8 p-8 bg-slate-50 rounded-[32px] border-2 border-slate-100">
      <div className="flex justify-center items-center mb-10">
        {renderTemplate()}
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {availableBlocks.map((block) => (
          <button
            key={block.id}
            onClick={() => handleBlockSelect(block.id)}
            disabled={isSubmitted}
            className={`w-14 h-14 rounded-2xl bg-white border-2 border-slate-200 shadow-[0_4px_0_#e2e8f0] active:shadow-none active:translate-y-1 transition-all flex items-center justify-center text-2xl font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600 ${
              selections.DROP_ZONE_1 === block.id ? "border-blue-500 text-blue-600 bg-blue-50 shadow-[0_4px_0_#bfdbfe]" : ""
            }`}
          >
            {block.label}
          </button>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={!isAllFilled}
            className={`px-12 py-4 rounded-[16px] font-bold text-[18px] transition-all ${
              isAllFilled
                ? "bg-[#4669F2] text-white shadow-[0_4px_0_#2B4CD2] active:translate-y-1 active:shadow-none"
                : "bg-slate-200 text-slate-400 cursor-not-allowed"
            }`}
          >
            Verify
          </button>
        ) : (
          <div className={`p-4 px-8 rounded-full font-bold ${!error ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {!error ? successMessage : errorMessage}
          </div>
        )}
      </div>
    </div>
  );
}
