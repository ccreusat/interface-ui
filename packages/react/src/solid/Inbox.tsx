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
      d="M18 2a4 4 0 0 1 4 4v8h-6.19a3.92 3.92 0 0 1-7.62 0H2V6a4 4 0 0 1 4-4ZM2 16v2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-2h-4.91a5.82 5.82 0 0 1-10.18 0Z"
    />
  </svg>
);
export default SvgInbox;
