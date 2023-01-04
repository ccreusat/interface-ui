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
      d="M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm11 6a1 1 0 0 1 .72 1.72l-6 6a1 1 0 0 1-1.44 0l-4-4a1 1 0 0 1 1.44-1.44L11 13.56l5.28-5.28A1 1 0 0 1 17 8Z"
    />
  </svg>
);
export default SvgCheckSquare;
