import { SVGProps } from "react";
const SvgHouse = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2.25a3.89 3.89 0 0 0-2.72 1.06L3 9.59A3.71 3.71 0 0 0 2 12v8a2 2 0 0 0 2 2h4.19A2.81 2.81 0 0 0 11 19.19V15h2v4.19A2.81 2.81 0 0 0 15.81 22H20a2 2 0 0 0 2-2v-8a3.71 3.71 0 0 0-1-2.38l-6.22-6.25A4 4 0 0 0 12 2.25Zm0 2a2.06 2.06 0 0 1 1.38.53L19.59 11a1.73 1.73 0 0 1 .41 1v8h-4.19a.81.81 0 0 1-.81-.81v-4.25A1.93 1.93 0 0 0 13.06 13h-2.12A1.93 1.93 0 0 0 9 14.94v4.25a.81.81 0 0 1-.81.81H4v-8a1.73 1.73 0 0 1 .41-1l6.28-6.28A1.83 1.83 0 0 1 12 4.25Z"
    />
  </svg>
);
export default SvgHouse;
