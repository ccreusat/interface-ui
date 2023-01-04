import { SVGProps } from "react";
const SvgAt = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 12v1.78A3.36 3.36 0 0 1 18.5 17a3.54 3.54 0 0 1-2.91-1.56 5 5 0 1 1-1.06-7.75 1 1 0 0 1 .35 1.37 1 1 0 0 1-1.35.35A3 3 0 1 0 15 12v-.12a1 1 0 0 1 2 0v1.9A1.38 1.38 0 0 0 18.5 15a1.38 1.38 0 0 0 1.5-1.22V12a8 8 0 1 0-8 8 7.9 7.9 0 0 0 3.62-.88 1 1 0 0 1 1.35.47 1 1 0 0 1-.44 1.35A10 10 0 1 1 22 12Z"
    />
  </svg>
);
export default SvgAt;
