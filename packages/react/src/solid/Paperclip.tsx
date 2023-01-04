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
      d="M18.44 4.05a7.13 7.13 0 0 1 0 10l-3.57 3.57-.72.76-2.1 2.12a5 5 0 0 1-7.08 0 5.11 5.11 0 0 1 0-7.17l.69-.7.72-.73 4.79-4.83a3.35 3.35 0 0 1 2.23-1 2.86 2.86 0 0 1 2.19.85 3.14 3.14 0 0 1-.15 4.42l-5.52 5.58a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.43L14 9.93a1.14 1.14 0 0 0 .15-1.58 1.12 1.12 0 0 0-1.57.16l-4.79 4.84-.72.72-.69.73a3 3 0 1 0 4.26 4.27l2.13-2.15.69-.7L17 12.65a5.11 5.11 0 0 0 0-7.17 5 5 0 0 0-7.08 0L7.79 7.62a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.42l2.13-2.15a7 7 0 0 1 9.93 0Z"
    />
  </svg>
);
export default SvgPaperclip;
