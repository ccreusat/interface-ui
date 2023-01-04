import { SVGProps } from "react";
const SvgListUl = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M6 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm1 2a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm3 0h7a1 1 0 0 1 0 2h-7a1 1 0 0 1 0-2Zm-3 5a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm3 0h7a1 1 0 0 1 0 2h-7a1 1 0 0 1 0-2Zm-3 5a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm3 0h7a1 1 0 0 1 0 2h-7a1 1 0 0 1 0-2Z"
    />
  </svg>
);
export default SvgListUl;
