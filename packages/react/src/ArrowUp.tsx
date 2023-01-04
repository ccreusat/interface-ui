import { SVGProps } from "react";
const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12.72 2.28 4 4a1 1 0 1 1-1.44 1.44L13 5.44V21a1 1 0 0 1-2 0V5.44L8.72 7.72a1 1 0 1 1-1.44-1.44l4-4a1.07 1.07 0 0 1 1.44 0Z"
    />
  </svg>
);
export default SvgArrowUp;
