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
      d="M10 2a8 8 0 0 0 0 16 8.08 8.08 0 0 0 4.9-1.7l5.37 5.41a1 1 0 1 0 1.44-1.44l-5.39-5.37A8 8 0 0 0 10 2Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M10 4a6 6 0 1 0 6 6 6 6 0 0 0-6-6Zm0 3a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2h1V8a1 1 0 0 1 1-1Z"
    />
  </svg>
);
export default SvgZoomIn;
