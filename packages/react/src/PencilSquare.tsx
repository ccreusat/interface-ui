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
      d="M17 2a1 1 0 0 0-.72.28l-2 2-8 8A1 1 0 0 0 6 13v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .72-.28l8-8 2-2A1 1 0 0 0 22 7a5 5 0 0 0-1.28-3.69A4.85 4.85 0 0 0 17 2Zm.38 2.06a2.77 2.77 0 0 1 1.9.63 2.94 2.94 0 0 1 .66 1.93l-.94.94L16.44 5ZM15 6.44 17.56 9l-7 7H8v-2.56ZM10 4a1 1 0 0 1 0 2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4a1 1 0 0 1 2 0v4a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Z"
    />
  </svg>
);
export default SvgPencilSquare;
