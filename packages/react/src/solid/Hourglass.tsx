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
      d="M8 2a4 4 0 0 0-4 4v1a4.48 4.48 0 0 0 .81 2.44l2 2.59-1.93 2.44A4.61 4.61 0 0 0 4 17v1a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-1a4.61 4.61 0 0 0-.78-2.44L17.28 12l1.91-2.59A4.54 4.54 0 0 0 20 7V6a4 4 0 0 0-4-4Zm2 14h4a1 1 0 0 1 0 2h-4a1 1 0 1 1 0-2Z"
    />
  </svg>
);
export default SvgHourglass;
