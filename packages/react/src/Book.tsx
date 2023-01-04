import { SVGProps } from "react";
const SvgBook = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 2a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h3a2.33 2.33 0 0 1 1.45.72 6 6 0 0 1 .55.59 1.2 1.2 0 0 0 1 .69c.48 0 .7-.27 1-.67a4.77 4.77 0 0 1 .56-.61A2.34 2.34 0 0 1 15 20h3a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4h-3a3.89 3.89 0 0 0-3 1.37A4 4 0 0 0 9 2Zm0 2h3a2 2 0 0 1 2 2v12.65A3.69 3.69 0 0 0 9 18H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm9 0h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3a3.74 3.74 0 0 0-2 .67V6a2 2 0 0 1 2-2Z"
    />
  </svg>
);
export default SvgBook;
