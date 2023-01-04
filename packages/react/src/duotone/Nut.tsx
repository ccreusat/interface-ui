import { SVGProps } from "react";
const SvgNut = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2.12a2.7 2.7 0 0 0-1.25.26L4.38 5.56A2.64 2.64 0 0 0 3 7.78V16a2.64 2.64 0 0 0 1.38 2.22l6.37 3.19a3 3 0 0 0 2.5 0l6.37-3.19A2.64 2.64 0 0 0 21 16V7.78a2.64 2.64 0 0 0-1.38-2.22l-6.37-3.18A2.7 2.7 0 0 0 12 2.12Zm0 6.76a3 3 0 1 1-3 3 3 3 0 0 1 3-3Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M11.62 4.19 5.25 7.38a.66.66 0 0 0-.25.4V16a.71.71 0 0 0 .25.41l6.37 3.18a1.23 1.23 0 0 0 .76 0l6.37-3.18A.71.71 0 0 0 19 16V7.78a.66.66 0 0 0-.25-.4l-6.37-3.19a1.23 1.23 0 0 0-.76 0ZM12 6.88a5 5 0 1 1-5 5 5 5 0 0 1 5-5Z"
    />
  </svg>
);
export default SvgNut;
