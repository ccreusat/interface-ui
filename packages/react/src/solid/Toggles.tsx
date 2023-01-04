import { SVGProps } from "react";
const SvgToggles = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.5 2A4.5 4.5 0 1 0 22 6.5 4.5 4.5 0 0 0 17.5 2Zm0 3A1.5 1.5 0 1 1 16 6.5 1.5 1.5 0 0 1 17.5 5Zm-6-1a6.5 6.5 0 0 0 0 5H5C3.07 9 2 7.88 2 6.5S3.07 4 5 4Zm-5 9a4.5 4.5 0 1 0 4.5 4.5A4.5 4.5 0 0 0 6.5 13Zm0 3A1.5 1.5 0 1 1 5 17.5 1.5 1.5 0 0 1 6.5 16ZM19 15c1.93 0 3 1.12 3 2.5S20.93 20 19 20h-6.5a6.5 6.5 0 0 0 0-5Z"
    />
  </svg>
);
export default SvgToggles;
