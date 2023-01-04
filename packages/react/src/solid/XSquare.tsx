import { SVGProps } from "react";
const SvgXSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm2 5a1 1 0 0 1 .72.28L12 10.56l3.28-3.28a1 1 0 1 1 1.44 1.44L13.44 12l3.28 3.28a1 1 0 1 1-1.44 1.44L12 13.44l-3.28 3.28a1 1 0 1 1-1.44-1.44L10.56 12 7.28 8.72A1 1 0 0 1 8 7Z"
    />
  </svg>
);
export default SvgXSquare;
