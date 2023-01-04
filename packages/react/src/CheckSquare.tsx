import { SVGProps } from "react";
const SvgCheckSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.72 8.28a1 1 0 0 1 0 1.44l-6 6a1 1 0 0 1-1.44 0l-4-4a1 1 0 0 1 1.44-1.44L11 13.56l5.28-5.28a1.07 1.07 0 0 1 1.44 0ZM18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4ZM4 6v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Z"
    />
  </svg>
);
export default SvgCheckSquare;
