import { SVGProps } from "react";
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 11v7a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-7Zm6 2a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm4 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm4 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm-8 3a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm4 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm4 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1ZM9 3h6a1 1 0 0 1 2 0h1a4 4 0 0 1 4 4v2H2V7a4 4 0 0 1 4-4h1a1 1 0 0 1 2 0Z"
    />
  </svg>
);
export default SvgCalendar;
