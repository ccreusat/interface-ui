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
      d="M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
    />
    <path
      fill="currentColor"
      d="M8 7a1 1 0 0 0-.72 1.72L10.56 12l-3.28 3.28a1 1 0 1 0 1.44 1.44L12 13.44l3.28 3.28a1 1 0 1 0 1.44-1.44L13.44 12l3.28-3.28a1 1 0 0 0-1.44-1.44L12 10.56 8.72 7.28A1 1 0 0 0 8 7Z"
    />
  </svg>
);
export default SvgXSquare;
