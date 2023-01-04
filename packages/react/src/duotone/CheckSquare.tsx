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
      d="M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
    />
    <path
      fill="currentColor"
      d="M17 8a1 1 0 0 0-.72.28L11 13.56l-3.28-3.28a1 1 0 0 0-1.44 1.44l4 4a1 1 0 0 0 1.44 0l6-6A1 1 0 0 0 17 8Z"
    />
  </svg>
);
export default SvgCheckSquare;
