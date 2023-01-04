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
      d="M17 7a1 1 0 0 1 .72.28l4 4a1.07 1.07 0 0 1 0 1.44l-4 4a1 1 0 1 1-1.44-1.44L18.56 13H3a1 1 0 0 1 0-2h15.56l-2.28-2.28A1 1 0 0 1 17 7Z"
    />
  </svg>
);
export default SvgArrowRight;
