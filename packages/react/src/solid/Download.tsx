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
      d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2a1 1 0 0 1 2 0v2a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-2a1 1 0 1 1 2 0Zm8-14a1 1 0 0 0-1 1v9H8a1 1 0 0 0-.72 1.72l4 4a1 1 0 0 0 1.44 0l4-4A1 1 0 0 0 16 12h-3V3a1 1 0 0 0-1-1Z"
    />
  </svg>
);
export default SvgDownload;
