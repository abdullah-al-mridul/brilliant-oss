import type { ComponentChildren } from "preact";

interface WindowWrapperProps {
  children: ComponentChildren;
  borderColor: string;
  isDark?: boolean;
}

export function WindowWrapper({
  children,
  borderColor,
  isDark = false,
}: WindowWrapperProps) {
  return (
    <div
      className={`w-full max-w-sm ${isDark ? "bg-[#0d1117]" : "bg-white"} rounded-xl overflow-hidden shadow-2xl border ${borderColor} group transition-all duration-500 relative flex flex-col min-h-[220px]`}
    >
      <div
        className={`${isDark ? "bg-[#161b22] border-gray-800" : "bg-gray-50 border-gray-100"} px-4 py-2.5 flex gap-1.5 border-b`}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
      </div>
      <div className="flex-1 relative overflow-hidden flex items-center justify-center ">
        {children}
      </div>
    </div>
  );
}
