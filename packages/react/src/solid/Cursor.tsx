import { SVGProps } from "react";
const SvgCursor = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.78 8.15 15 20c-1.08 2.21-3.14 2-3.67-.44l-1.24-5.65-5.63-1.26C2.06 12.12 1.81 10.06 4 9l11.9-5.79a6.87 6.87 0 0 1 2.92-.71c2.48.05 3.49 2.29 1.96 5.65Z"
    />
  </svg>
);
export default SvgCursor;
