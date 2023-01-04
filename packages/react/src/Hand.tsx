import { SVGProps } from "react";
const SvgHand = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 2a3 3 0 0 0-2.84 2A4 4 0 0 0 3 8v5c0 5.76 3.57 9 8 9a9.66 9.66 0 0 0 7.22-2.78 20.61 20.61 0 0 0 3.69-5.78A1.12 1.12 0 0 0 22 13a3 3 0 0 0-3-3 3.9 3.9 0 0 0-2 .55V7a4 4 0 0 0-4-4h-.76A3.07 3.07 0 0 0 10 2Zm0 2a1 1 0 0 1 1 1v5a1 1 0 0 0 2 0V5a2 2 0 0 1 2 2s0 3.79 0 6a1 1 0 0 0 1 1 1 1 0 0 0 .91-.56 2.44 2.44 0 0 1 .58-.75A2 2 0 0 1 19 12a1 1 0 0 1 1 .8C17.6 18 15.17 20 11 20c-3.37 0-6-2.39-6-7V8a2 2 0 0 1 2-2v4a1 1 0 0 0 2 0V5a1 1 0 0 1 1-1Z"
    />
  </svg>
);
export default SvgHand;
