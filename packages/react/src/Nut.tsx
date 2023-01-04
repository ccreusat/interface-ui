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
      d="M12 2.22a2.87 2.87 0 0 0-1.25.28L4.34 5.72A2.56 2.56 0 0 0 3 7.91v8.18a2.57 2.57 0 0 0 1.34 2.19l6.41 3.22a3 3 0 0 0 2.5 0l6.41-3.22A2.57 2.57 0 0 0 21 16.09V7.91a2.56 2.56 0 0 0-1.34-2.19L13.25 2.5A2.87 2.87 0 0 0 12 2.22Zm-.34 2.06a1 1 0 0 1 .68 0l6.41 3.22a.65.65 0 0 1 .25.41v8.18a.65.65 0 0 1-.25.41l-6.41 3.22a1 1 0 0 1-.68 0L5.25 16.5a.65.65 0 0 1-.25-.41V7.91a.65.65 0 0 1 .25-.41ZM12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5Zm0 2a3 3 0 1 1-3 3 3 3 0 0 1 3-3Z"
    />
  </svg>
);
export default SvgNut;
