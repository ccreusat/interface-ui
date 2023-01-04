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
      d="M4 13v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 1 2 0v5a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-5a1 1 0 0 1 2 0Zm11 1a1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1 1 1 0 0 0-1 1Zm-4 0a1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1 1 1 0 0 0-1 1Zm-4 0a1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1 1 1 0 0 0-1 1Zm4 3a1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1 1 1 0 0 0-1 1Zm-4 0a1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1 1 1 0 0 0-1 1Zm8 0a1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1 1 1 0 0 0-1 1ZM9 3h6a1 1 0 0 1 2 0h1a4 4 0 0 1 4 4v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4h1a1 1 0 0 1 2 0ZM4 7v1h16V7a2 2 0 0 0-2-2h-1a1 1 0 0 1-2 0H9a1 1 0 0 1-2 0H6a2 2 0 0 0-2 2Z"
    />
  </svg>
);
export default SvgCalendar;
