import { SVGProps } from "react";
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    aria-hidden="true"
    {...props}
  >
    <path
      fill="currentColor"
      d="M3 12a1 1 0 0 0-1 1v5a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-5a1 1 0 0 0-2 0v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5a1 1 0 0 0-1-1Z"
    />
    <path
      fill="currentColor"
      d="M16 13a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1ZM12 13a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1ZM8 13a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1ZM12 16a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1ZM8 16a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1ZM16 16a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1ZM8 2a1 1 0 0 0-1 1H6a4 4 0 0 0-4 4v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4h-1a1 1 0 0 0-2 0H9a1 1 0 0 0-1-1Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M6 5h1a1 1 0 0 0 2 0h6a1 1 0 0 0 2 0h1a2 2 0 0 1 2 2v1H4V7a2 2 0 0 1 2-2Z"
    />
  </svg>
);
export default SvgCalendar;
