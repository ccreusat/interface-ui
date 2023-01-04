import { SVGProps } from "react";
const SvgKey2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 6a6 6 0 1 0 5.18 9h3.2l.71 1.44A1 1 0 0 0 18 17h3a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-7.84A6 6 0 0 0 8 6Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M8 8a4 4 0 1 0 3.66 5.59 1 1 0 0 1 .9-.59H17a1 1 0 0 1 .91.56l.71 1.44H20v-4h-7.44a1 1 0 0 1-.9-.59A4 4 0 0 0 8 8Zm0 3a1 1 0 1 1-.72.28A1 1 0 0 1 8 11Z"
    />
  </svg>
);
export default SvgKey2;
