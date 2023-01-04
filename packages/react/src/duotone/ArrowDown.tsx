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
      d="M17 17a1 1 0 0 1-.28.72l-4 4a1.07 1.07 0 0 1-1.44 0l-4-4a1 1 0 0 1 1.44-1.44L11 18.56V3a1 1 0 0 1 2 0v15.56l2.28-2.28A1 1 0 0 1 17 17Z"
    />
  </svg>
);
export default SvgArrowDown;
