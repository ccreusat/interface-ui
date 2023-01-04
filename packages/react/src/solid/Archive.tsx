import { SVGProps } from "react";
const SvgArchive = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 2a4 4 0 0 1 4 4v1H2V6a4 4 0 0 1 4-4Zm3 7v9a3.83 3.83 0 0 1-3.66 4H6.66A3.83 3.83 0 0 1 3 18V9ZM9 13.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 0-3h-3A1.5 1.5 0 0 0 9 13.5Z"
    />
  </svg>
);
export default SvgArchive;
