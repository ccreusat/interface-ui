import { SVGProps } from "react";
const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22a1 1 0 0 1-1-1V8H8a1 1 0 0 1-.72-1.71l4-4a1.05 1.05 0 0 1 1.43 0l4 4A1 1 0 0 1 16 8h-3v13a1 1 0 0 1-1 1Z"
    />
  </svg>
);
export default SvgArrowUp;
