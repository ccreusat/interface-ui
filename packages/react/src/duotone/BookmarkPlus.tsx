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
      d="M8 2a3.63 3.63 0 0 0-4 4v15a1 1 0 0 0 1.41.91L12 19.1l6.6 2.82A1 1 0 0 0 20 21V6c0-2.62-1.31-4-4-4Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M8 4c-1.45 0-2 .55-2 2v13.51l5.6-2.41a1 1 0 0 1 .81 0L18 19.51V6c0-1.54-.44-2-2-2Zm4 3a1 1 0 0 1 1 1v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V8a1 1 0 0 1 1-1Z"
    />
  </svg>
);
export default SvgBookmarkPlus;
