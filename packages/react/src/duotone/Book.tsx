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
      d="M6 2a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h3a2.2 2.2 0 0 1 1.42.7 7 7 0 0 1 .69.76A1 1 0 0 0 12 22a1 1 0 0 0 .92-.56 4.86 4.86 0 0 1 .65-.72A2.26 2.26 0 0 1 15 20h3a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4h-3a3.89 3.89 0 0 0-3 1.37A4 4 0 0 0 9 2Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M6 4h3a2 2 0 0 1 2 2v12.66A3.68 3.68 0 0 0 9 18H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2ZM15 4h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3a3.61 3.61 0 0 0-2 .65V6a2 2 0 0 1 2-2Z"
    />
  </svg>
);
export default SvgBook;
