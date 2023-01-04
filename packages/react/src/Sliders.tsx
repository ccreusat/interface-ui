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
      d="M16 2a4 4 0 0 0-3.87 3H3a1 1 0 0 0 0 2h9.12a4 4 0 0 0 7.76 0H21a1 1 0 0 0 0-2h-1.13A4 4 0 0 0 16 2Zm0 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2ZM8 8a4 4 0 0 0-3.87 3H3a1 1 0 0 0 0 2h1.12A4 4 0 0 0 8 16a4 4 0 0 0 3.88-3H21a1 1 0 0 0 0-2h-9.13A4 4 0 0 0 8 8Zm0 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2Zm8 4a4 4 0 0 0-3.87 3H3a1 1 0 0 0 0 2h9.12a4 4 0 0 0 7.76 0H21a1 1 0 0 0 0-2h-1.13A4 4 0 0 0 16 14Zm0 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2Z"
    />
  </svg>
);
export default SvgSliders;
