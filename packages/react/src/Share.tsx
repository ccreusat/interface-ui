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
      d="M18 2a4 4 0 0 0-4 4 3.86 3.86 0 0 0 .09.84L9 9.38a4 4 0 1 0 0 5.24l5.09 2.54A3.86 3.86 0 0 0 14 18a4 4 0 1 0 1-2.62l-5.09-2.54a4 4 0 0 0 0-1.68L15 8.62A4 4 0 1 0 18 2Zm0 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2ZM6 10a2 2 0 1 1-2 2 2 2 0 0 1 2-2Zm12 6a2 2 0 1 1-2 2 2 2 0 0 1 2-2Z"
    />
  </svg>
);
export default SvgShare;
