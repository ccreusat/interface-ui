import { SVGProps } from "react";
const SvgHourglass = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 2a4 4 0 0 0-4 4v1a4.44 4.44 0 0 0 .78 2.44l2 2.59-1.93 2.44A4.61 4.61 0 0 0 4 17v1a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-1a4.64 4.64 0 0 0-.81-2.44l-2-2.59 2-2.59A4.54 4.54 0 0 0 20 7V6a4 4 0 0 0-4-4Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M8 4a2 2 0 0 0-2 2v1a2.65 2.65 0 0 0 .41 1.22l2.38 3.19a1 1 0 0 1 0 1.18l-2.35 3.1A2.65 2.65 0 0 0 6 17v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a2.68 2.68 0 0 0-.41-1.22l-2.38-3.22a1 1 0 0 1 0-1.18l2.35-3.19A2.58 2.58 0 0 0 18 7V6a2 2 0 0 0-2-2Zm2 12h4a1 1 0 0 1 0 2h-4a1 1 0 1 1 0-2Z"
    />
  </svg>
);
export default SvgHourglass;
