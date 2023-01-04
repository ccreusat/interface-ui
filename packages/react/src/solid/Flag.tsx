import { SVGProps } from "react";
const SvgFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 4c1.66 0 1.73-.45 2.5-.47A1.49 1.49 0 0 1 20 5v8c0 1-1 3-4 3-4 0-4-2-8-2a4.34 4.34 0 0 0-2 .37V21a.94.94 0 0 1-1 1 1 1 0 0 1-1-1V5c0-2 2-3 4-3 4 0 4 2 8 2Z"
    />
  </svg>
);
export default SvgFlag;
