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
      d="m17.72 7.28 4 4a1.05 1.05 0 0 1 0 1.43l-4 4a1 1 0 0 1-1.44-1.44L18.56 13H3a1 1 0 0 1 0-2h15.56l-2.28-2.28a1 1 0 0 1 1.44-1.44Z"
    />
  </svg>
);
export default SvgArrowRight;
