export function MedoxyLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 360 250"
      role="img"
      aria-label="Medoxy"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" stroke="#ef3340" strokeLinecap="round" strokeLinejoin="round">
        <path d="M177 74a32 32 0 1 1 0-64a32 32 0 0 1 32 32v61" strokeWidth="12" />
        <path d="M141 74h-13a32 32 0 1 0 0 64h20" strokeWidth="12" />
        <path d="M216 74h14a32 32 0 1 1 0 64h-62" strokeWidth="12" />
        <path d="M208 139v16a32 32 0 1 1-64 0V45" strokeWidth="12" />
        <path d="M143 43l38 39l39-39" strokeWidth="11" />
        <path d="M143 43v73" strokeWidth="11" />
        <path d="M220 43v73" strokeWidth="11" />
      </g>
      <text
        x="180"
        y="228"
        textAnchor="middle"
        fill="#ef3340"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="82"
        fontWeight="500"
      >
        Medoxy
      </text>
    </svg>
  );
}
