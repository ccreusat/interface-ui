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
      d="M16 2a4 4 0 0 0-3.81 3H3a1 1 0 0 0 0 2h9.19a3.92 3.92 0 0 0 7.62 0H21a1 1 0 0 0 0-2h-1.19A4 4 0 0 0 16 2ZM8 8a4 4 0 0 0-3.81 3H3a1 1 0 0 0 0 2h1.19a3.92 3.92 0 0 0 7.62 0H21a1 1 0 0 0 0-2h-9.19A4 4 0 0 0 8 8Zm8 6a4 4 0 0 0-3.81 3H3a1 1 0 0 0 0 2h9.19a3.92 3.92 0 0 0 7.62 0H21a1 1 0 0 0 0-2h-1.19A4 4 0 0 0 16 14Z"
    />
  </svg>
);
export default SvgSliders;
