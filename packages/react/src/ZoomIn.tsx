import { SVGProps } from "react";
const SvgZoomIn = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 2a8 8 0 1 0 4.9 14.32l4.37 4.38a1 1 0 0 0 1.43 0 1 1 0 0 0 0-1.41l-4.38-4.39A8 8 0 0 0 10 2Zm0 2a6 6 0 1 1-6 6 6 6 0 0 1 6-6Zm1 4v1h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2h1V8a1 1 0 0 1 2 0Z"
    />
  </svg>
);
export default SvgZoomIn;
