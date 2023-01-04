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
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm2.44 7.56-1.22 3.66-3.66 1.22 1.22-3.66Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M12 4a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm3.69 3.06a1 1 0 0 1 1.25 1.25l-2 6a1 1 0 0 1-.63.63l-6 2a1 1 0 0 1-1.25-1.25l2-6a1 1 0 0 1 .63-.63Z"
    />
  </svg>
);
export default SvgCompass;
