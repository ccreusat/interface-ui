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
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4 7a1 1 0 0 1 .72 1.72l-5 5a1 1 0 0 1-1.44 0l-3-3a1 1 0 1 1 1.44-1.44L11 13.56l4.28-4.28A1 1 0 0 1 16 9Z"
    />
  </svg>
);
export default SvgCheckCircle;
