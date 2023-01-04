import { SVGProps } from "react";
const SvgCompass = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 2a8 8 0 1 1-8 8 8 8 0 0 1 8-8Zm3.69 3.06-6 2a1 1 0 0 0-.63.63l-2 6a1 1 0 0 0 1.25 1.25l6-2a1 1 0 0 0 .63-.63l2-6a1 1 0 0 0-1.25-1.25Zm-1.25 2.5-1.22 3.66-3.66 1.22 1.22-3.66Z"
    />
  </svg>
);
export default SvgCompass;
