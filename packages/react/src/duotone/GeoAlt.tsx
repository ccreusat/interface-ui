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
      d="M12 2a8 8 0 0 0-8 8c0 3.47 2.25 7.41 5.28 10.69l.28.28A3.65 3.65 0 0 0 12 22a3.93 3.93 0 0 0 2.69-1.28C17.63 17.81 20 13.52 20 10a8 8 0 0 0-8-8Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M12 4a6 6 0 0 0-6 6c0 2.83 2 6.38 4.72 9.31A2.11 2.11 0 0 0 12 20a2.08 2.08 0 0 0 1.28-.72C15.85 16.71 18 12.89 18 10a6 6 0 0 0-6-6Zm0 5a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"
    />
  </svg>
);
export default SvgGeoAlt;
