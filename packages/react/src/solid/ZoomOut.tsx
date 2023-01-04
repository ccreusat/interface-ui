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
      d="M10 2a8 8 0 0 0 0 16 7.82 7.82 0 0 0 4.81-1.75l5.47 5.47a1 1 0 1 0 1.44-1.44l-5.47-5.46A7.86 7.86 0 0 0 18 10a8 8 0 0 0-8-8ZM7 9h6a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2Z"
    />
  </svg>
);
export default SvgZoomOut;
