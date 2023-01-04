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
      d="M7 7a1 1 0 0 0-.72.28l-4 4a1.07 1.07 0 0 0 0 1.44l4 4a1 1 0 1 0 1.44-1.44L5.44 13H21a1 1 0 0 0 0-2H5.44l2.28-2.28A1 1 0 0 0 7 7Z"
    />
  </svg>
);
export default SvgArrowLeft;
