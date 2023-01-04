import { SVGProps } from "react";
const SvgAt = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2a10 10 0 1 0 4.53 18.94 1 1 0 0 0 .47-1.35 1 1 0 0 0-1.35-.47A7.9 7.9 0 0 1 12 20a8 8 0 1 1 8-8v1.78A1.38 1.38 0 0 1 18.5 15a1.38 1.38 0 0 1-1.5-1.22v-1.9a1 1 0 0 0-2 0V12a3 3 0 1 1-1.47-2.59 1 1 0 0 0 1.35-.35 1 1 0 0 0-.35-1.37 5 5 0 1 0 1.06 7.75A3.54 3.54 0 0 0 18.5 17a3.36 3.36 0 0 0 3.5-3.22V12A10 10 0 0 0 12 2Z"
    />
  </svg>
);
export default SvgAt;
