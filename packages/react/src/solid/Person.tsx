import { SVGProps } from "react";
const SvgPerson = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 7a5 5 0 1 1-5-5 5 5 0 0 1 5 5Zm-7 6a6 6 0 0 0-6 6v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2a6 6 0 0 0-6-6Z"
    />
  </svg>
);
export default SvgPerson;
