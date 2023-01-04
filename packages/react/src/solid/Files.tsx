import { SVGProps } from "react";
const SvgFiles = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 2a7.4 7.4 0 0 0-7 7v5.69A3.46 3.46 0 0 0 6.56 18H7v.66A3.46 3.46 0 0 0 10.56 22h6.88A3.46 3.46 0 0 0 21 18.66V9.34A3.46 3.46 0 0 0 17.44 6H17v-.66A3.46 3.46 0 0 0 13.44 2ZM9 4.12v2.54a1.22 1.22 0 0 1-.44.93A1.69 1.69 0 0 1 7.44 8H5.12A5.78 5.78 0 0 1 9 4.12ZM17 8h.44A1.46 1.46 0 0 1 19 9.34v9.32A1.46 1.46 0 0 1 17.44 20h-6.88A1.46 1.46 0 0 1 9 18.66V18h4.44A3.46 3.46 0 0 0 17 14.66Z"
    />
  </svg>
);
export default SvgFiles;
