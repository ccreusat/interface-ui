import { SVGProps } from "react";
const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 15a1 1 0 0 0-1 1v2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-2a1 1 0 0 0-2 0v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a1 1 0 0 0-1-1Z"
    />
    <path
      fill="currentColor"
      d="M12 2a1 1 0 0 0-1 1v11.56l-2.28-2.28a1 1 0 1 0-1.44 1.44l4 4a1 1 0 0 0 1.44 0l4-4a1 1 0 1 0-1.44-1.44L13 14.56V3a1 1 0 0 0-1-1Z"
    />
  </svg>
);
export default SvgDownload;
