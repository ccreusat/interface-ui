import { SVGProps } from "react";
const SvgStar = (props: SVGProps<SVGSVGElement>) => (
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
      d="m13.48 3.61 2.12 4.31 4.75.69a1.56 1.56 0 0 1 .91 2.81l-3.44 3.34.82 4.69a1.58 1.58 0 0 1-2.41 1.75L12 19l-4.24 2.2a1.54 1.54 0 0 1-2.37-1.72l.81-4.72-3.47-3.37a1.58 1.58 0 0 1 .94-2.82l4.78-.65 2.09-4.31A1.67 1.67 0 0 1 12 2.54a1.67 1.67 0 0 1 1.48 1.07Z"
    />
  </svg>
);
export default SvgStar;
