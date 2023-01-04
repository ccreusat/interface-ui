import { SVGProps } from "react";
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 11h13V8a1 1 0 0 1 1.72-.72l4 4A1 1 0 0 1 22 12a1 1 0 0 1-.28.72l-4 4A1 1 0 0 1 16 16v-3H3a1 1 0 0 1 0-2Z"
    />
  </svg>
);
export default SvgArrowRight;
