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
      d="M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm0 2h12a2 2 0 0 1 2 2v8.75A4.18 4.18 0 0 0 17 13c-1.29 0-2.45.92-3.56 2.41a2 2 0 0 0-.13.18c-.23-.69-.49-1.35-.78-2C11.28 10.74 9.88 9 8 9c-1.63 0-2.87 1.32-4 3.47V6a2 2 0 0 1 2-2Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M8 11c.75 0 1.78 1.26 2.72 3.41.36.83.68 1.75 1 2.65.1.32.33 1.14.34 1.19a1 1 0 0 0 1.88.19c.05-.11.16-.3.31-.56a13.57 13.57 0 0 1 .84-1.29c.76-1 1.48-1.59 1.94-1.59s1.18.58 1.94 1.59a14.22 14.22 0 0 1 1 1.64 2.07 2.07 0 0 1-.65 1.26A2 2 0 0 1 18 20H6a2 2 0 0 1-2-1.93c.06-.22.22-.74.3-1 .29-.9.61-1.82 1-2.65C6.22 12.26 7.25 11 8 11Z"
    />
    <path fill="currentColor" d="M15 8a1 1 0 1 1 1 1 1 1 0 0 1-1-1Z" />
  </svg>
);
export default SvgImage;
