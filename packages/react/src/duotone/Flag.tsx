import { SVGProps } from "react";
const SvgFlag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 2a4.06 4.06 0 0 0-3.44 1.41A2.63 2.63 0 0 0 4 5v16a1 1 0 0 0 2 0v-6.53A4.14 4.14 0 0 1 8 14a8 8 0 0 1 3.47.91C13.61 15.86 14 16 15 16c2.74 0 5-1.51 5-4V5a1.3 1.3 0 0 0-1.38-1.41 3.23 3.23 0 0 0-.65.1l-.72.12A10.67 10.67 0 0 1 15 4a6.16 6.16 0 0 1-3.06-.91A7.8 7.8 0 0 0 8 2Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M8 4a6.65 6.65 0 0 1 3.21 1A8.29 8.29 0 0 0 15 6a12.67 12.67 0 0 0 2.62-.25c.11 0 .2 0 .38-.06V12c0 1.18-1.24 2-3 2-.61 0-.92-.11-2.72-.91A10 10 0 0 0 8 12a6 6 0 0 0-2 .31V5a.87.87 0 0 1 .16-.41C6.42 4.24 7 4 8 4Z"
    />
  </svg>
);
export default SvgFlag;
