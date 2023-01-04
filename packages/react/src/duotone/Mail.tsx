import { SVGProps } from "react";
const SvgMail = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 12a1 1 0 0 0-1 1v5a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-5a1 1 0 0 0-2 0v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5a1 1 0 0 0-1-1Z"
    />
    <path
      fill="currentColor"
      d="M6 3a4 4 0 0 0-4 4c0 .39.12.64.67 1.23a38.81 38.81 0 0 0 7.58 6.2A4 4 0 0 0 12 15a3.78 3.78 0 0 0 1.58-.48 38.1 38.1 0 0 0 7.7-6.22A2.08 2.08 0 0 0 22 7a4 4 0 0 0-4-4Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M6 5h12a2 2 0 0 1 2 1.75c-.17.2-.53.57-.84.88-.71.7-1.61 1.52-2.55 2.31C14.44 11.76 12.54 13 12 13s-2.44-1.24-4.59-3.06c-.94-.79-1.86-1.65-2.57-2.35-.31-.31-.64-.65-.82-.85A2 2 0 0 1 6 5Z"
    />
  </svg>
);
export default SvgMail;
