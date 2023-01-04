import { SVGProps } from "react";
const SvgToggleOn = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2ZM9 5a7 7 0 0 0 0 14h6a7 7 0 0 0 0-14Zm0 2h6a5 5 0 0 1 0 10H9A5 5 0 0 1 9 7Z"
    />
  </svg>
);
export default SvgToggleOn;
