import { SVGProps } from "react";
const SvgCamera = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 2a1 1 0 0 0-.84.44L6.44 5H6a4 4 0 0 0-4 4v9a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-.44l-1.72-2.56A1 1 0 0 0 15 2Zm3 6a5 5 0 1 1-5 5 5 5 0 0 1 5-5Zm6 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm-6 2a3 3 0 1 1-3 3 3 3 0 0 1 3-3Z"
    />
  </svg>
);
export default SvgCamera;
