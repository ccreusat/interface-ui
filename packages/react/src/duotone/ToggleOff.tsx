import { SVGProps } from "react";
const SvgToggleOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 5a7 7 0 0 1 0 14H9A7 7 0 0 1 9 5Zm0 2H9a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10Z"
    />
    <path fill="currentColor" d="M9 8a4 4 0 1 1-4 4 4 4 0 0 1 4-4Z" />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M9 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z"
    />
  </svg>
);
export default SvgToggleOff;
