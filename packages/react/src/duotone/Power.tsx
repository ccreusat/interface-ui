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
      d="M7.81 5.12a1 1 0 0 1-.15 1.41 7 7 0 1 0 8.72 0 1 1 0 0 1-.16-1.41 1 1 0 0 1 1.4-.12A9 9 0 1 1 6.41 5a1 1 0 0 1 .71-.22 1.05 1.05 0 0 1 .69.34ZM12 2a1 1 0 0 0-1 1v9a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1Z"
    />
  </svg>
);
export default SvgPower;
