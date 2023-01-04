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
      d="M10 2a8 8 0 0 0 0 16 7.82 7.82 0 0 0 4.81-1.75l5.47 5.47a1 1 0 1 0 1.44-1.44l-5.47-5.46A7.86 7.86 0 0 0 18 10a8 8 0 0 0-8-8Zm0 4a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H7a1 1 0 1 1 0-2h2V7a1 1 0 0 1 1-1Z"
    />
  </svg>
);
export default SvgZoomIn;
