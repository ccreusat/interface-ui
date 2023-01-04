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
      d="M13.48 2a6.93 6.93 0 0 0-5 2.05L6.4 6.2a1 1 0 0 0 0 1.42 1 1 0 0 0 1.41 0l2.13-2.14a5 5 0 0 1 7.09 0 5.13 5.13 0 0 1 0 7.17l-3.55 3.57-.68.7-2.13 2.15A3 3 0 1 1 6.4 14.8l.69-.73.72-.72 4.83-4.84a1.12 1.12 0 0 1 1.57-.16 1.15 1.15 0 0 1-.16 1.58l-5.52 5.56a1 1 0 0 0 0 1.43 1 1 0 0 0 1.41 0l5.52-5.57a3.13 3.13 0 0 0 .16-4.42 2.9 2.9 0 0 0-2.2-.85 3.31 3.31 0 0 0-2.22 1l-4.8 4.84-.72.73-.69.7a5.11 5.11 0 0 0 0 7.17 5 5 0 0 0 7.09 0l2.09-2.12.72-.76 3.58-3.57a7.13 7.13 0 0 0 0-10A7 7 0 0 0 13.48 2Z"
    />
  </svg>
);
export default SvgPaperclip;
