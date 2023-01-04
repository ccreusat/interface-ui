import { SVGProps } from "react";
const SvgLock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2a6 6 0 0 0-5.88 4.84A1 1 0 0 0 6.91 8a1 1 0 0 0 1.15-.78 4 4 0 0 1 7.88 0 1 1 0 0 0 1.15.78 1 1 0 0 0 .79-1.16A6 6 0 0 0 12 2ZM5 9a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3Zm7 5a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M5 11a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1Zm7 1a3 3 0 0 1 3 3v1a3 3 0 0 1-6 0v-1a3 3 0 0 1 3-3Z"
    />
  </svg>
);
export default SvgLock;
