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
      d="M13 8v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V8a1 1 0 0 1 2 0Zm3-6c2.7 0 4 1.38 4 4v15a1 1 0 0 1-1.41.91L12 19.1l-6.59 2.82A1 1 0 0 1 4 21V6a3.63 3.63 0 0 1 4-4ZM6 6v13.51l5.59-2.41a1.06 1.06 0 0 1 .82 0L18 19.51V6c0-1.54-.43-2-2-2H8c-1.45 0-2 .55-2 2Z"
    />
  </svg>
);
export default SvgBookmarkPlus;
