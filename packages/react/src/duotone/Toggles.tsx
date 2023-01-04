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
      d="M17.5 2a4.77 4.77 0 0 0-2.84 1H5.5a3.5 3.5 0 0 0 0 7h9.19a4.5 4.5 0 1 0 2.81-8Zm-12 3h7.75A4.37 4.37 0 0 0 13 6.5a4.37 4.37 0 0 0 .25 1.5H5.5a1.5 1.5 0 0 1 0-3Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M17.5 4A2.5 2.5 0 1 1 15 6.5 2.5 2.5 0 0 1 17.5 4Z"
    />
    <path
      fill="currentColor"
      d="M6.5 13a4.5 4.5 0 0 0 0 9 4.56 4.56 0 0 0 2.84-1h9.16a3.5 3.5 0 0 0 0-7H9.31a4.68 4.68 0 0 0-2.81-1Zm4.25 3h7.75a1.5 1.5 0 0 1 0 3h-7.75a4.63 4.63 0 0 0 0-3Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M6.5 15A2.5 2.5 0 1 1 4 17.5 2.52 2.52 0 0 1 6.5 15Z"
    />
  </svg>
);
export default SvgToggles;
