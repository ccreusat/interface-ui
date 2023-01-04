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
      d="M9 2a5.84 5.84 0 0 0-3.75 1.22C4.8 3.58 4 4.37 4 5v16a1 1 0 0 0 2 0v-4.69a2 2 0 0 1 .5-.53A3.91 3.91 0 0 1 9 15c1.72 0 1.85 1 5 1a5.72 5.72 0 0 0 6-6V5a3.14 3.14 0 0 0-3-3c-1.36 0-2.21 1-4 1s-2.15-1-4-1Zm0 2a3.38 3.38 0 0 1 1.41.41A5.78 5.78 0 0 0 13 5c2 0 3.48-1 4-1a1.18 1.18 0 0 1 1 1v5a3.72 3.72 0 0 1-4 4c-2.81 0-2.72-1-5-1a5.91 5.91 0 0 0-3 .74V5.29a2.69 2.69 0 0 1 .5-.51A3.91 3.91 0 0 1 9 4Z"
    />
  </svg>
);
export default SvgFlag;
