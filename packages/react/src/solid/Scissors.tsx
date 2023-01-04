import { SVGProps } from "react";
const SvgScissors = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 3a4 4 0 0 0 0 8 3.83 3.83 0 0 0 1.76-.41l2 1.41-1.98 1.41A4 4 0 0 0 6 13a4 4 0 1 0 4 4 1.69 1.69 0 0 0 0-.23l3.13-2.27 5.68 4.12a2 2 0 1 0 2.38-3.24L16.56 12l4.62-3.38a2 2 0 0 0-2.38-3.24L13.12 9.5 10 7.24A1.93 1.93 0 0 0 10 7a4 4 0 0 0-4-4Zm0 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2Zm7 6a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm-7 4a2 2 0 1 1-2 2 2 2 0 0 1 2-2Z"
    />
  </svg>
);
export default SvgScissors;
