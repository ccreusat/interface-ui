import { SVGProps } from "react";
const SvgBookmarkPlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 2a3.63 3.63 0 0 0-4 4v15a1 1 0 0 0 1.41.91L12 19.1l6.59 2.82A1 1 0 0 0 20 21V6c0-2.62-1.3-4-4-4Zm4 5a1 1 0 0 1 1 1v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V8a1 1 0 0 1 1-1Z"
    />
  </svg>
);
export default SvgBookmarkPlus;
