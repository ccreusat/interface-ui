import { SVGProps } from "react";
const SvgXCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 2a8 8 0 1 1-8 8 8 8 0 0 1 8-8ZM9.72 8.28 12 10.56l2.28-2.28a1 1 0 0 1 1.44 1.44L13.44 12l2.28 2.28a1 1 0 0 1-1.44 1.44L12 13.44l-2.28 2.28a1 1 0 0 1-1.44-1.44L10.56 12 8.28 9.72a1 1 0 0 1 1.44-1.44Z"
    />
  </svg>
);
export default SvgXCircle;
