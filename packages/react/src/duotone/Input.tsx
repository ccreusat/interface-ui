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
      d="M14 8a1 1 0 0 0-.72 1.72L14.56 11H3a1 1 0 0 0 0 2h11.56l-1.28 1.28a1 1 0 0 0 1.44 1.44l3-3a1.07 1.07 0 0 0 0-1.44l-3-3A1 1 0 0 0 14 8Z"
    />
    <path
      fill="currentColor"
      d="M6 2a4 4 0 0 0-4 4v2a1 1 0 0 0 2 0V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a1 1 0 0 0-2 0v2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z"
    />
  </svg>
);
export default SvgInput;
