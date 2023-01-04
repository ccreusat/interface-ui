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
      d="M12 2a5 5 0 0 0-5 5v4a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5Zm0 2a3 3 0 0 1 3 3v4a3 3 0 0 1-6 0V7a3 3 0 0 1 3-3ZM5.87 14.51A7 7 0 0 0 12 18a7.08 7.08 0 0 0 6.12-3.5 1 1 0 0 1 1.39-.34 1 1 0 0 1 .35 1.34A9.1 9.1 0 0 1 13 19.94V21a1 1 0 0 1-2 0v-1.06a9 9 0 0 1-6.87-4.44 1 1 0 0 1 .38-1.37 1 1 0 0 1 .76-.13 1 1 0 0 1 .6.51Z"
    />
  </svg>
);
export default SvgMic;
