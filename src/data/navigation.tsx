

export const heroNavItems = [
  {
    label: "Math",
    textColor: "text-blue-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <rect x="2" y="10" width="10" height="10" fill="#60a5fa" rx="1" />
        <rect x="12" y="2" width="10" height="10" fill="#3b82f6" rx="1" />
        <path d="M12 12 L22 12" stroke="white" strokeWidth="2" />
        <path d="M12 2 L12 12" stroke="white" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: "Computer Science",
    textColor: "text-purple-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path
          d="M4 8 L20 8 M4 16 L20 16"
          stroke="#9333ea"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="8" cy="8" r="3" fill="#c084fc" />
        <circle cx="16" cy="16" r="3" fill="#a855f7" />
      </svg>
    ),
  },
  {
    label: "Coding & AI",
    textColor: "text-indigo-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <circle cx="12" cy="6" r="4" fill="#818cf8" />
        <circle cx="6" cy="18" r="4" fill="#6366f1" />
        <circle cx="18" cy="18" r="4" fill="#a5b4fc" />
        <path d="M12 10 L6 14 M12 10 L18 14" stroke="#818cf8" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: "Data Analysis",
    textColor: "text-red-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path
          d="M2 20 L8 10 L14 16 L22 4"
          fill="none"
          stroke="#f87171"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="8" cy="10" r="2.5" fill="#fca5a5" />
        <circle cx="14" cy="16" r="2.5" fill="#ef4444" />
      </svg>
    ),
  },
  {
    label: "Science & Engineering",
    textColor: "text-yellow-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
        <circle cx="8" cy="12" r="5" fill="#eab308" />
        <circle cx="16" cy="8" r="4" fill="#facc15" />
        <circle cx="14" cy="16" r="4" fill="#ca8a04" />
      </svg>
    ),
  },
];

export const categoryTabs = [
  {
    key: "Math",
    label: "Math",
    activeClass:
      "bg-linear-to-r from-white to-[#d6e4ff] text-[#0f1115] shadow-lg shadow-blue-500/20",
  },
  {
    key: "ComputerScience",
    label: "Computer Science",
    activeClass:
      "bg-linear-to-r from-white to-[#ebd6ff] text-[#0f1115] shadow-lg shadow-purple-500/20",
  },
  {
    key: "DataAnalysis",
    label: "Data Analysis",
    activeClass:
      "bg-linear-to-r from-white to-[#ffe0cf] text-[#0f1115] shadow-lg shadow-orange-500/20",
  },
  {
    key: "Science",
    label: "Science",
    activeClass:
      "bg-linear-to-r from-white to-[#fff0cc] text-[#0f1115] shadow-lg shadow-yellow-500/20",
  },
];
