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
      d="M6 2a4 4 0 0 0-4 4v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a4 4 0 0 0-4-4Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M6 4h12a2 2 0 0 1 2 2v1H4V6a2 2 0 0 1 2-2Z"
    />
    <path
      fill="currentColor"
      d="M4 11a1 1 0 0 0-1 1v6a3.83 3.83 0 0 0 3.66 4h10.68A3.83 3.83 0 0 0 21 18v-6a1 1 0 0 0-2 0v6a1.85 1.85 0 0 1-1.66 2H6.66A1.85 1.85 0 0 1 5 18v-6a1 1 0 0 0-1-1Z"
    />
    <path
      fill="currentColor"
      d="M10.5 12a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 0 0-5Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M10.5 14h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Z"
    />
  </svg>
);
export default SvgArchive;
