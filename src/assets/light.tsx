
function LightModeIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" stroke="currentColor">
        <circle cx={12} cy={12} r={4} strokeLinejoin="round" />
        <path
          strokeLinecap="round"
          d="M20 12h1M3 12h1m8 8v1m0-18v1m5.657 13.657l.707.707M5.636 5.636l.707.707m0 11.314l-.707.707M18.364 5.636l-.707.707"
        />
      </g>
    </svg>
  )
}

export default LightModeIcon