import { SVGProps } from "react";
const SvgPencilSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 2a1 1 0 0 0-.72.28l-2 2-8 8A1 1 0 0 0 6 13v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .72-.28l8-8 2-2A1 1 0 0 0 22 7a5 5 0 0 0-1.28-3.69A4.85 4.85 0 0 0 17 2Zm.4 2a2.67 2.67 0 0 1 1.88.67A2.92 2.92 0 0 1 20 6.61l-1 1L16.42 5Z"
    />
    <path fill="#fff" fillOpacity={0.5} d="M15 6.44 17.56 9l-7 7H8v-2.56Z" />
    <path
      fill="currentColor"
      d="M6 4a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-4a1 1 0 0 0-2 0v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4a1 1 0 0 0 0-2Z"
    />
  </svg>
);
export default SvgPencilSquare;
