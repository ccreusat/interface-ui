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
      d="M14 16a1 1 0 0 1 0 2h-4a1 1 0 1 1 0-2Zm2-14a4 4 0 0 1 4 4v1a4.54 4.54 0 0 1-.81 2.41L17.28 12l1.94 2.59A4.61 4.61 0 0 1 20 17v1a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-1a4.61 4.61 0 0 1 .85-2.5L6.76 12 4.81 9.41A4.48 4.48 0 0 1 4 7V6a4 4 0 0 1 4-4ZM6 6v1a2.65 2.65 0 0 0 .41 1.22l2.41 3.19a1 1 0 0 1 0 1.18l-2.35 3.1A2.68 2.68 0 0 0 6 17v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a2.68 2.68 0 0 0-.41-1.22l-2.38-3.22a1 1 0 0 1 0-1.18l2.38-3.19A2.54 2.54 0 0 0 18 7V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2Z"
    />
  </svg>
);
export default SvgHourglass;
