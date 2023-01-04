import { SVGProps } from "react";
const SvgArchive = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 2a4 4 0 0 0-4 4v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a4 4 0 0 0-4-4Zm0 2h12a2 2 0 0 1 2 2v1H4V6a2 2 0 0 1 2-2Zm-1 8v6a1.85 1.85 0 0 0 1.66 2h10.68A1.85 1.85 0 0 0 19 18v-6a1 1 0 0 1 2 0v6a3.83 3.83 0 0 1-3.66 4H6.66A3.83 3.83 0 0 1 3 18v-6a1 1 0 0 1 2 0Zm5.5 0a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 0 0-5Zm0 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Z"
    />
  </svg>
);
export default SvgArchive;
