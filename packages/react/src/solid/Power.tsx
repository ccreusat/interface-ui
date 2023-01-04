import { SVGProps } from "react";
const SvgPower = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 3v9a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm-4 .62A9 9 0 1 0 21 12a8.92 8.92 0 0 0-6-8.38V12a3 3 0 0 1-6 0Z"
    />
  </svg>
);
export default SvgPower;
