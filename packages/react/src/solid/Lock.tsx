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
      d="M17.88 6.84A1 1 0 0 1 17.09 8a1 1 0 0 1-1.15-.78 4 4 0 0 0-7.88 0A1 1 0 0 1 6.91 8a1 1 0 0 1-.79-1.16 6 6 0 0 1 11.76 0ZM19 9a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3Zm-9 5a1.84 1.84 0 0 0 1 1.56V18a1 1 0 0 0 2 0v-2.44A1.84 1.84 0 0 0 14 14a2 2 0 0 0-4 0Zm9-5a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3Zm-9 5a1.84 1.84 0 0 0 1 1.56V18a1 1 0 0 0 2 0v-2.44A1.84 1.84 0 0 0 14 14a2 2 0 0 0-4 0Z"
    />
  </svg>
);
export default SvgLock;
