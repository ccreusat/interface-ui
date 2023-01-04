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
      d="M22 6a4 4 0 0 1-4 4 4.06 4.06 0 0 1-3-1.38l-5.09 2.55a3.92 3.92 0 0 1 0 1.67L15 15.38A4 4 0 1 1 14 18a4.49 4.49 0 0 1 .09-.83L9 14.63A4 4 0 1 1 6 8a4 4 0 0 1 3 1.38l5.09-2.54A3.86 3.86 0 0 1 14 6a4 4 0 0 1 8 0Z"
    />
  </svg>
);
export default SvgShare;
