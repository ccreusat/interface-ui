import { SVGProps } from "react";
const SvgAppIndicator = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 6a4 4 0 1 1-4-4 4 4 0 0 1 4 4ZM6 4a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-6.35a5.76 5.76 0 0 1-2 .35 6 6 0 0 1-6-6 5.71 5.71 0 0 1 .35-2Z"
    />
  </svg>
);
export default SvgAppIndicator;
