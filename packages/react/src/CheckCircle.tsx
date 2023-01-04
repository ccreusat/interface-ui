import { SVGProps } from "react";
const SvgCheckCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 2a8 8 0 1 1-8 8 8 8 0 0 1 8-8Zm4.72 5.28a1 1 0 0 1 0 1.44l-5 5a1 1 0 0 1-1.44 0l-3-3a1 1 0 1 1 1.44-1.44L11 13.56l4.28-4.28a1.07 1.07 0 0 1 1.44 0Z"
    />
  </svg>
);
export default SvgCheckCircle;
