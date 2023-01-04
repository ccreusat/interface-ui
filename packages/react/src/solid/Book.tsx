import { SVGProps } from "react";
const SvgBook = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 2a2.15 2.15 0 0 1 2 2v11.16a.93.93 0 0 0 1 .84.93.93 0 0 0 1-.84V4a2.15 2.15 0 0 1 2-2h3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-3c-2 0-2 2-3 2s-1-2-3-2H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z"
    />
  </svg>
);
export default SvgBook;
