import { SVGProps } from "react";
const SvgScissors = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 3a4 4 0 0 0 0 8 4.06 4.06 0 0 0 2.66-1l2.68 2-2.68 2A4.06 4.06 0 0 0 6 13a4 4 0 1 0 4 4 4.23 4.23 0 0 0-.23-1.34l11.82-8.85a1 1 0 0 0 .22-1.4 1.07 1.07 0 0 0-.66-.41 1 1 0 0 0-.75.19L13 10.75 9.77 8.33A4.22 4.22 0 0 0 10 7a4 4 0 0 0-4-4Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M6 5a2 2 0 1 1-2 2 2 2 0 0 1 2-2ZM6 15a2 2 0 1 1-2 2 2 2 0 0 1 2-2Z"
    />
    <path
      fill="currentColor"
      d="M15.53 13a1 1 0 0 0-.66.41 1 1 0 0 0 .19 1.37l5.34 4a1 1 0 1 0 1.19-1.62l-5.34-4a.93.93 0 0 0-.72-.16Z"
    />
  </svg>
);
export default SvgScissors;
