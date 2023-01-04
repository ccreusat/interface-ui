import { SVGProps } from "react";
const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm4.41 5.78a1 1 0 0 1 1 .22l4.18 3a1.15 1.15 0 0 1 0 2l-4.18 3c-.78.55-1.41.23-1.41-.72V8.72a1 1 0 0 1 .41-.94Z"
    />
  </svg>
);
export default SvgPlay;
