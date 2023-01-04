import { SVGProps } from "react";
const SvgZoomOut = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 2a8 8 0 1 0 4.89 14.3l4.38 4.41a1 1 0 1 0 1.44-1.44l-4.42-4.36A8.11 8.11 0 0 0 18 10a8 8 0 0 0-8-8Zm0 2a6 6 0 1 1-6 6 6 6 0 0 1 6-6Zm2 5a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2Z"
    />
  </svg>
);
export default SvgZoomOut;
