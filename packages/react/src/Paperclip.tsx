import { SVGProps } from "react";
const SvgPaperclip = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.43 4.05a7.15 7.15 0 0 1 0 10l-3.57 3.57-.72.76-2.09 2.12a5 5 0 0 1-7.06 0 5.13 5.13 0 0 1 0-7.17l.69-.7.71-.73 4.79-4.83a3.31 3.31 0 0 1 2.21-1 2.86 2.86 0 0 1 2.19.85 3.14 3.14 0 0 1-.15 4.42l-5.5 5.57a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.43L14 9.93a1.15 1.15 0 0 0 .16-1.58 1.12 1.12 0 0 0-1.57.16L7.8 13.35l-.72.72-.69.73a3 3 0 0 0 0 4.27 3 3 0 0 0 4.25 0l2.13-2.15.69-.7L17 12.65a5.13 5.13 0 0 0 0-7.17 4.94 4.94 0 0 0-7.06 0L7.8 7.62a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.42l2.13-2.15a7 7 0 0 1 9.91 0Z"
    />
  </svg>
);
export default SvgPaperclip;
