import { SVGProps } from "react";
const SvgImage = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm10 3a3 3 0 1 1-3 3 3 3 0 0 1 3-3Zm-8 6c.75 0 1.78 1.26 2.72 3.41a24.47 24.47 0 0 1 1 2.65c.1.32.33 1.14.34 1.19a1 1 0 0 0 1.88.19c.05-.11.16-.3.31-.56a13.57 13.57 0 0 1 .84-1.29c.76-1 1.48-1.59 1.94-1.59s1.18.58 1.94 1.59a13.57 13.57 0 0 1 .84 1.29l.16.28A2 2 0 0 1 18 20H6a2 2 0 0 1-2-1.94c.06-.22.2-.73.28-1a24.47 24.47 0 0 1 1-2.65C6.24 12.26 7.27 11 8 11Z"
    />
  </svg>
);
export default SvgImage;
