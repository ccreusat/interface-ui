import { SVGProps } from "react";
const SvgShare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 2a4 4 0 0 0-4 4 4.6 4.6 0 0 0 .08.84L9 9.38a4 4 0 1 0 0 5.24l5.07 2.54A4.6 4.6 0 0 0 14 18a4 4 0 1 0 1-2.62l-5.08-2.54a4.19 4.19 0 0 0 0-1.68L15 8.61A4 4 0 1 0 18 2Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M18 4a2 2 0 1 1-2 2 2 2 0 0 1 2-2ZM6 10a2 2 0 1 1-2 2 2 2 0 0 1 2-2ZM18 16a2 2 0 1 1-2 2 2 2 0 0 1 2-2Z"
    />
  </svg>
);
export default SvgShare;
