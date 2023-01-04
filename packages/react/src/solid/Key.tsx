import { SVGProps } from "react";
const SvgKey = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.06 2.06c-1-.12-1-.12-2 .87l-3 3c-2 2 .94 4.05-2 7l-4 4c-3 3 1 7 4 4 1-1 0-2 1-3s2 0 3-1c3-3 5-.06 7-2l3-3c1-1 1-1 .87-2a9.23 9.23 0 0 0-7.87-7.87ZM15 8a1 1 0 1 1-.71.28A1 1 0 0 1 15 8Z"
    />
  </svg>
);
export default SvgKey;
