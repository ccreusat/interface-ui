import { SVGProps } from "react";
const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 3v15.56l2.25-2.28a1 1 0 1 1 1.44 1.44l-4 4a1.05 1.05 0 0 1-1.46 0c-1.15-1.1-4-4-4-4a1 1 0 0 1 0-1.44A1.06 1.06 0 0 1 8 16a1 1 0 0 1 .72.28L11 18.56V3a1 1 0 0 1 2 0Z"
    />
  </svg>
);
export default SvgArrowDown;
