interface MathDisplayBlockProps {
  equation: string;
}

export function MathDisplayBlock({ equation }: MathDisplayBlockProps) {
  return (
    <div className="math-display-block my-8 flex justify-center">
      <div className="bg-slate-50 border-2 border-slate-100 rounded-2xl px-12 py-8 shadow-sm">
        <span className="text-[32px] font-medium text-slate-800 font-serif italic tracking-wide">
          {equation}
        </span>
      </div>
    </div>
  );
}
