import { SVGProps } from "react";
const SvgHouse = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.78 3.38 21 9.59A3.71 3.71 0 0 1 22 12v8a2 2 0 0 1-2 2h-5v-7a3 3 0 0 0-6 0v7H4a2 2 0 0 1-2-2v-8a3.71 3.71 0 0 1 1-2.41l6.28-6.28a4 4 0 0 1 5.5.07Z"
    />
  </svg>
);
export default SvgHouse;
