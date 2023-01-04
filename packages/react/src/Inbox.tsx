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
      d="M6 2a4 4 0 0 0-4 4v8a1 1 0 0 0 1 1h5.19a3.92 3.92 0 0 0 7.62 0H21a1 1 0 0 0 1-1V6a4 4 0 0 0-4-4Zm0 2h12a2 2 0 0 1 2 2v7h-5a1 1 0 0 0-1 1 2 2 0 0 1-4 0 1 1 0 0 0-1-1H4V6a2 2 0 0 1 2-2ZM4 18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2 1 1 0 0 1 2 0 4 4 0 0 1-4 4H6a4 4 0 0 1-4-4 1 1 0 0 1 2 0Z"
    />
  </svg>
);
export default SvgInbox;
