import { SVGProps } from "react";
const SvgGeoAlt = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 10a1 1 0 1 1 1 1 1 1 0 0 1-1-1Zm9 0c0 3.52-2.37 7.81-5.28 10.72A3.93 3.93 0 0 1 12 22a3.65 3.65 0 0 1-2.44-1l-.28-.28C6.25 17.41 4 13.47 4 10a8 8 0 0 1 16 0ZM6 10c0 2.83 2 6.38 4.72 9.31a1.7 1.7 0 0 0 .19.19A1.68 1.68 0 0 0 12 20a2.08 2.08 0 0 0 1.28-.72C15.85 16.71 18 12.89 18 10a6 6 0 0 0-12 0Z"
    />
  </svg>
);
export default SvgGeoAlt;
