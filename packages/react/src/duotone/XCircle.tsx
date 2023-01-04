import { SVGProps } from "react";
const SvgXCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    aria-hidden="true"
    {...props}
  >
    <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z" />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M12 4a8 8 0 1 1-8 8 8 8 0 0 1 8-8Z"
    />
    <path
      fill="currentColor"
      d="M9 8a1 1 0 0 0-.72 1.72L10.56 12l-2.28 2.28a1 1 0 0 0 1.44 1.44L12 13.44l2.28 2.28a1 1 0 0 0 1.44-1.44L13.44 12l2.28-2.28a1 1 0 0 0-1.44-1.44L12 10.56 9.72 8.28A1 1 0 0 0 9 8Z"
    />
  </svg>
);
export default SvgXCircle;
