import { SVGProps } from "react";
const SvgNut = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2.48a2.82 2.82 0 0 0-1.25.25L4.38 5.92A2.62 2.62 0 0 0 3 8.14v8.18a2.62 2.62 0 0 0 1.38 2.22l6.37 3.19a3 3 0 0 0 2.5 0l6.37-3.19A2.62 2.62 0 0 0 21 16.32V8.14a2.62 2.62 0 0 0-1.38-2.22l-6.37-3.19A2.82 2.82 0 0 0 12 2.48ZM12 8a4 4 0 1 1-4 4 4 4 0 0 1 4-4Z"
    />
  </svg>
);
export default SvgNut;
