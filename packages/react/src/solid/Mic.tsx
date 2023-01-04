import { SVGProps } from "react";
const SvgMic = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.06 7v4A5 5 0 0 1 7 11V7a5 5 0 0 1 10.06 0ZM5.3 14a1.09 1.09 0 0 0-.79.09 1 1 0 0 0-.38 1.38A9.07 9.07 0 0 0 11 19.88V21a1 1 0 0 0 2 0v-1.12a9 9 0 0 0 6.83-4.38 1 1 0 0 0-.35-1.34 1 1 0 0 0-1.38.34 7.07 7.07 0 0 1-12.24-.06A1 1 0 0 0 5.3 14Z"
    />
  </svg>
);
export default SvgMic;
