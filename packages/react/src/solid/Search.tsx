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
      d="M18 10a7.86 7.86 0 0 1-1.75 4.81l5.47 5.46a1 1 0 1 1-1.44 1.44l-5.48-5.47A7.82 7.82 0 0 1 10 18a8 8 0 1 1 8-8Z"
    />
  </svg>
);
export default SvgSearch;
