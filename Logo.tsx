export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Window frame */}
        <rect x="6" y="6" width="28" height="28" rx="2" fill="#1E90FF" strokeWidth="0" />
        <rect x="8" y="8" width="24" height="24" rx="1" fill="white" strokeWidth="0" />

        {/* Grid lines (window panes) */}
        <line x1="20" y1="8" x2="20" y2="32" stroke="#E8F4FD" strokeWidth="1" />
        <line x1="8" y1="20" x2="32" y2="20" stroke="#E8F4FD" strokeWidth="1" />

        {/* Shine effect */}
        <line x1="12" y1="12" x2="28" y2="28" stroke="#FFC93C" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="font-bold text-sm text-navy">Clearline</span>
        <span className="text-xs font-semibold text-sky-blue">WINDOW CO.</span>
      </div>
    </div>
  );
}

// CSS variables for colors - add to globals.css
export const colorTokens = `
  :root {
    --navy: #0B2545;
    --sky-blue: #1E90FF;
    --aqua: #E8F4FD;
    --sun-yellow: #FFC93C;
    --slate: #475569;
  }
`;
