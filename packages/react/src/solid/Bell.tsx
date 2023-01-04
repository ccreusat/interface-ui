import { SVGProps } from "react";
const SvgBell = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 8v3c0 .32.14.55.69 1l.43.34A4.34 4.34 0 0 1 21 16c0 1.35-1.06 1.83-2.69 2H5.69C4.06 17.83 3 17.35 3 16a4.26 4.26 0 0 1 1.88-3.62l.4-.38c.55-.46.72-.68.72-1V8a5.72 5.72 0 0 1 6-6 5.72 5.72 0 0 1 6 6ZM9.81 19A1 1 0 0 0 9 20.62 3.94 3.94 0 0 0 12 22a4 4 0 0 0 3-1.34 1 1 0 0 0-1.5-1.32 2 2 0 0 1-3 0 1 1 0 0 0-.69-.34Z"
    />
  </svg>
);
export default SvgBell;
