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
      d="M6 7a1 1 0 1 1 1 1 1 1 0 0 1-1-1Zm1 6a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm0 5a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm3-12a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2Zm0 5a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2Zm0 5a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2Zm8-14a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4ZM4 6v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Z"
    />
  </svg>
);
export default SvgListUl;
