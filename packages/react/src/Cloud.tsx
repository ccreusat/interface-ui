import { SVGProps } from "react";
const SvgCloud = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 4a6 6 0 0 0-5.94 5.23A5.22 5.22 0 0 0 2 14.38 5.54 5.54 0 0 0 7.31 20H17a4.77 4.77 0 0 0 5-4.5 4.68 4.68 0 0 0-4-4.41V10a6 6 0 0 0-6-6Zm0 2a4 4 0 0 1 4 4v2a1 1 0 0 0 1 1 2.79 2.79 0 0 1 3 2.5 2.79 2.79 0 0 1-3 2.5H7.31A3.54 3.54 0 0 1 4 14.38a3.35 3.35 0 0 1 2.81-3.29h.28a1 1 0 0 0 .91-1V10a4 4 0 0 1 4-4Z"
    />
  </svg>
);
export default SvgCloud;
