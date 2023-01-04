import { SVGProps } from "react";
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 2a8 8 0 0 0 0 16 8.1 8.1 0 0 0 4.91-1.69l4.39 4.39a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.44l-4.4-4.36A8 8 0 0 0 10 2Zm0 2a6 6 0 1 1-6 6 6 6 0 0 1 6-6Z"
    />
  </svg>
);
export default SvgSearch;
