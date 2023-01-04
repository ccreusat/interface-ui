import { SVGProps } from "react";
const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 3v13h3a1 1 0 0 1 .72 1.72l-4 4a1.05 1.05 0 0 1-1.43 0l-4-4A1 1 0 0 1 8 16h3V3a1 1 0 0 1 2 0Z"
    />
  </svg>
);
export default SvgArrowDown;
