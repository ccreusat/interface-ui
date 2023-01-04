import { SVGProps } from "react";
const SvgAppIndicator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    aria-hidden="true"
    {...props}
  >
    <path fill="currentColor" d="M18 2a4 4 0 1 0 4 4 4 4 0 0 0-4-4Z" />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M18 4a2 2 0 1 1-2 2 2 2 0 0 1 2-2Z"
    />
    <path
      fill="currentColor"
      d="M6 4a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-5a1 1 0 0 0-2 0v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5a1 1 0 0 0 0-2Z"
    />
  </svg>
);
export default SvgAppIndicator;
