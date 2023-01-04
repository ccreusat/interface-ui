import { SVGProps } from "react";
const SvgCursor = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.32 3a6.76 6.76 0 0 0-2.92.72L3.52 9.47c-2.21 1.08-2 3.13.44 3.67l5.62 1.27L10.86 20c.53 2.4 2.59 2.65 3.67.44l5.75-11.81c1.53-3.37.52-5.58-1.96-5.63Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M17.91 4.93c1.32-.19 1.51.77.56 2.86l-5.72 11.72-1.36-6.15a1 1 0 0 0-.75-.75l-6.15-1.37 11.75-5.72a6.91 6.91 0 0 1 1.67-.59Z"
    />
  </svg>
);
export default SvgCursor;
