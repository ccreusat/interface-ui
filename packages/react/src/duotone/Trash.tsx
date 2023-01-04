import { SVGProps } from "react";
const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 11.09a1 1 0 0 0-1 1V17a1 1 0 0 0 2 0v-4.91a1 1 0 0 0-1-1ZM14 11.09a1 1 0 0 0-1 1V17a1 1 0 0 0 2 0v-4.91a1 1 0 0 0-1-1Z"
    />
    <path
      fill="currentColor"
      d="M6 11a1 1 0 0 0-1 1v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-6a1 1 0 0 0-2 0v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6a1 1 0 0 0-1-1ZM7 2a4.19 4.19 0 0 0-4 4.19V8a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a4 4 0 0 0-4-4Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M7 4h10a2 2 0 0 1 2 2v1H5v-.81A2.19 2.19 0 0 1 7 4Z"
    />
  </svg>
);
export default SvgTrash;
