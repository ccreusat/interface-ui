import { SVGProps } from "react";
const SvgInput = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-5h12.56l-1.28 1.28a1 1 0 0 0 1.44 1.44l3-3a1.07 1.07 0 0 0 0-1.44l-3-3a1 1 0 0 0-1.44 1.44L14.56 11H2V6a4 4 0 0 1 4-4Z"
    />
  </svg>
);
export default SvgInput;
