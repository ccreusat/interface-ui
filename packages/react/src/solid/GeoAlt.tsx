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
      d="M12 2a8 8 0 0 0-8 8c0 3.47 2.25 7.41 5.28 10.69l.28.28A3.65 3.65 0 0 0 12 22a3.93 3.93 0 0 0 2.69-1.28C17.63 17.81 20 13.52 20 10a8 8 0 0 0-8-8Zm0 4a4 4 0 1 1-4 4 4 4 0 0 1 4-4Z"
    />
  </svg>
);
export default SvgGeoAlt;
