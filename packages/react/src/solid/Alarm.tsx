import { SVGProps } from "react";
const SvgAlarm = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 5a8 8 0 0 0-8 8 7.84 7.84 0 0 0 1.75 4.8l-2.47 2.47a1 1 0 1 0 1.44 1.44l2.47-2.47A7.84 7.84 0 0 0 12 21a7.84 7.84 0 0 0 4.81-1.75l2.47 2.47a1 1 0 1 0 1.44-1.44l-2.47-2.48A7.84 7.84 0 0 0 20 13a8 8 0 0 0-8-8Zm0 4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 1-1ZM9.38 2.59a1 1 0 0 1-.16 1.85 9.25 9.25 0 0 0-5.16 4.27 1 1 0 0 1-1.81-.18A5 5 0 0 1 7 2a5 5 0 0 1 2.38.59ZM22 7a5 5 0 0 1-.25 1.59 1 1 0 0 1-1.87.06 9.3 9.3 0 0 0-5-4.18 1 1 0 0 1-.22-1.88A5 5 0 0 1 22 7Z"
    />
  </svg>
);
export default SvgAlarm;
