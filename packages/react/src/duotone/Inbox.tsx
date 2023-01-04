import { SVGProps } from "react";
const SvgInbox = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 2a4 4 0 0 0-4 4v8a1 1 0 0 0 1 1h5.14a4 4 0 0 0 7.73 0H21a1 1 0 0 0 1-1V6a4 4 0 0 0-4-4Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M6 4h12a2 2 0 0 1 2 2v7h-5a1 1 0 0 0-1 1 2 2 0 0 1-4 0 1 1 0 0 0-1-1H4V6a2 2 0 0 1 2-2Z"
    />
    <path
      fill="currentColor"
      d="M3 17a1 1 0 0 0-1 1 4 4 0 0 0 4 4h12a4 4 0 0 0 4-4 1 1 0 0 0-2 0 2 2 0 0 1-2 2H6a2 2 0 0 1-2-2 1 1 0 0 0-1-1Z"
    />
  </svg>
);
export default SvgInbox;
