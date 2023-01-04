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
      d="M8.72 7.28 12 10.56l3.28-3.28a1 1 0 1 1 1.44 1.44L13.44 12l3.28 3.28a1 1 0 1 1-1.44 1.44L12 13.44l-3.28 3.28a1 1 0 1 1-1.44-1.44L10.56 12 7.28 8.72a1 1 0 0 1 1.44-1.44ZM18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4ZM4 6v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Z"
    />
  </svg>
);
export default SvgXSquare;
