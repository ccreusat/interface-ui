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
      d="M17 2a4 4 0 0 1 4 4v1H3v-.81A4.19 4.19 0 0 1 7 2Zm-2.84 7H19v9a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9ZM9 13.09V18a1 1 0 0 0 2 0v-4.91a1 1 0 0 0-2 0Zm4 0V18a1 1 0 0 0 2 0v-4.91a1 1 0 0 0-2 0Z"
    />
  </svg>
);
export default SvgTrash;
