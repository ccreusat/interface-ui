import { SVGProps } from "react";
const SvgSliders = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 2a4 4 0 0 0-3.88 3H3a1 1 0 0 0 0 2h9.13a4 4 0 0 0 7.74 0H21a1 1 0 0 0 0-2h-1.14A4 4 0 0 0 16 2Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M16 4a2 2 0 1 1-2 2 2 2 0 0 1 2-2Z"
    />
    <path
      fill="currentColor"
      d="M8 8a4 4 0 0 0-3.87 3H3a1 1 0 0 0 0 2h1.13A4 4 0 0 0 8 16a4 4 0 0 0 3.87-3H21a1 1 0 0 0 0-2h-9.13A4 4 0 0 0 8 8Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M8 10a2 2 0 1 1-2 2 2 2 0 0 1 2-2Z"
    />
    <path
      fill="currentColor"
      d="M16 14a4 4 0 0 0-3.88 3H3a1 1 0 0 0 0 2h9.12a4 4 0 0 0 7.75 0H21a1 1 0 0 0 0-2h-1.14A4 4 0 0 0 16 14Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M16 16a2 2 0 1 1-2 2 2 2 0 0 1 2-2Z"
    />
  </svg>
);
export default SvgSliders;
