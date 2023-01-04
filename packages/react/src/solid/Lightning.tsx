import { SVGProps } from "react";
const SvgLightning = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 3.09v6h6a1 1 0 0 1 .84 1.53l-7 11a1 1 0 0 1-1.84-.54v-6H5a1 1 0 0 1-.85-1.53l7-11a1 1 0 0 1 1.85.54Z"
    />
  </svg>
);
export default SvgLightning;
