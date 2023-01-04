import { SVGProps } from "react";
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 12a1 1 0 0 1-1 1H8v3a1 1 0 0 1-1.72.72l-4-4A1 1 0 0 1 2 12a1 1 0 0 1 .28-.72l4-4A1 1 0 0 1 8 8v3h13a1 1 0 0 1 1 1Z"
    />
  </svg>
);
export default SvgArrowLeft;
