import { SVGProps } from "react";
const SvgExclamationCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 2a8 8 0 1 1-8 8 8 8 0 0 1 8-8Zm0 11a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm1-7v5a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0Z"
    />
  </svg>
);
export default SvgExclamationCircle;
