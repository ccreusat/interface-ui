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
      d="M10 2a3.06 3.06 0 0 0-2.83 2 4.26 4.26 0 0 0-1.51.25A4 4 0 0 0 3 8v5c0 5.76 3.61 9 8 9a9.55 9.55 0 0 0 7.22-2.78c1.35-1.35 2.14-2.68 3.69-5.78A2.11 2.11 0 0 0 22 13a3 3 0 0 0-3-3 3.87 3.87 0 0 0-2 .55V7a4 4 0 0 0-4-4h-.74A3.18 3.18 0 0 0 10 2Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M10 4a1 1 0 0 1 1 1v5a1 1 0 0 0 2 0V5a2 2 0 0 1 2 2v6a1 1 0 0 0 1.91.44 3.48 3.48 0 0 1 .59-.77A2 2 0 0 1 19 12a1 1 0 0 1 1 .81C17.43 18.17 15.1 20 11 20c-3.37 0-6-2.39-6-7V8a2 2 0 0 1 1.34-1.88A2.1 2.1 0 0 1 7 6v4a1 1 0 0 0 2 0V5a1 1 0 0 1 1-1Z"
    />
  </svg>
);
export default SvgHand;
