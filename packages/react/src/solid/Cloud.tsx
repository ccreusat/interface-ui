import { SVGProps } from "react";
const SvgCloud = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 10v1.19a4.57 4.57 0 0 1 4 4.31 4.77 4.77 0 0 1-5 4.5H7.31A5.54 5.54 0 0 1 2 14.38a5.29 5.29 0 0 1 4.16-5.13A5.92 5.92 0 0 1 12 4a6 6 0 0 1 6 6Z"
    />
  </svg>
);
export default SvgCloud;
