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
      d="M7.72 7.28a1 1 0 0 1 0 1.44L5.44 11H21a1 1 0 0 1 0 2H5.44l2.28 2.28a1 1 0 1 1-1.44 1.44l-4-4a1.05 1.05 0 0 1 0-1.43l4-4a1.07 1.07 0 0 1 1.44 0Z"
    />
  </svg>
);
export default SvgArrowLeft;
