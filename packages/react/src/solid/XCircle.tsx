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
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2ZM9 8a1 1 0 0 1 .72.28L12 10.56l2.28-2.28a1 1 0 0 1 1.44 1.44L13.44 12l2.28 2.28a1 1 0 0 1-1.44 1.44L12 13.44l-2.28 2.28a1 1 0 0 1-1.44-1.44L10.56 12 8.28 9.72A1 1 0 0 1 9 8Z"
    />
  </svg>
);
export default SvgXCircle;
