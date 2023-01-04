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
      d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5Zm0 2a3 3 0 1 1-3 3 3 3 0 0 1 3-3Zm2 9a6 6 0 0 1 6 6v2a1 1 0 0 1-2 0v-2a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v2a1 1 0 0 1-2 0v-2a6 6 0 0 1 6-6Z"
    />
  </svg>
);
export default SvgPerson;
