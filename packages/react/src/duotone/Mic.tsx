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
      d="M12 2a5 5 0 0 0-5 5v4a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M12 4a3 3 0 0 1 3 3v4a3 3 0 0 1-6 0V7a3 3 0 0 1 3-3Z"
    />
    <path
      fill="currentColor"
      d="M5.27 14a1 1 0 0 0-.75.09 1 1 0 0 0-.38 1.38A9 9 0 0 0 11 19.94V21a1 1 0 0 0 2 0v-1a9.13 9.13 0 0 0 6.86-4.45 1 1 0 0 0-.38-1.34 1 1 0 0 0-1.39.34 7.11 7.11 0 0 1-12.24 0 1 1 0 0 0-.58-.55Z"
    />
  </svg>
);
export default SvgMic;
