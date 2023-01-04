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
      d="M17 7a1 1 0 0 0-.28-.72l-4-4a1.07 1.07 0 0 0-1.44 0l-4 4a1 1 0 1 0 1.44 1.44L11 5.44V21a1 1 0 0 0 2 0V5.44l2.28 2.28A1 1 0 0 0 17 7Z"
    />
  </svg>
);
export default SvgArrowUp;
