import { SVGProps } from "react";
const SvgScissors = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16.25 13.19 5.34 4a1 1 0 1 1-1.19 1.62l-5.34-4a1 1 0 0 1-.19-1.37 1 1 0 0 1 .66-.41.93.93 0 0 1 .72.16ZM10 7a4.17 4.17 0 0 1-.22 1.33L13 10.75l7.4-5.56a1 1 0 0 1 .75-.19 1.07 1.07 0 0 1 .66.41 1 1 0 0 1-.22 1.4L9.77 15.67A3.91 3.91 0 0 1 10 17a4 4 0 1 1-1.34-3l2.68-2-2.69-2A4 4 0 1 1 10 7ZM4 7a2 2 0 1 0 2-2 2 2 0 0 0-2 2Zm0 10a2 2 0 1 0 2-2 2 2 0 0 0-2 2Z"
    />
  </svg>
);
export default SvgScissors;
