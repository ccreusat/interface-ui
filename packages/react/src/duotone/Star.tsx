import { SVGProps } from "react";
const SvgStar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2.53a1.68 1.68 0 0 0-1.47 1.06L8.44 7.91l-4.78.68a1.57 1.57 0 0 0-.91 2.82l3.44 3.34-.81 4.72a1.57 1.57 0 0 0 2.4 1.75L12 19l4.25 2.25a1.56 1.56 0 0 0 2.37-1.75l-.81-4.72 3.44-3.34a1.57 1.57 0 0 0-.91-2.82l-4.78-.68-2.09-4.35A1.68 1.68 0 0 0 12 2.53Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="m12 5.12 2 4.16a1 1 0 0 0 .75.53l4.6.66L16 13.69a1 1 0 0 0-.28.9l.78 4.53L12.47 17a1 1 0 0 0-.94 0l-4.06 2.12.78-4.53a1 1 0 0 0-.28-.9l-3.35-3.22 4.6-.63a1 1 0 0 0 .78-.56Z"
    />
  </svg>
);
export default SvgStar;
