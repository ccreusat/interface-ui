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
      d="M6 4a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9.44l-8.28 8.28A1 1 0 0 1 11 18H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .28-.72L14.56 4Z"
    />
    <path
      fill="currentColor"
      d="m14.56 4-8.28 8.28A1 1 0 0 0 6 13v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .72-.28L20 9.44V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm4.76-1.87L8 13.44V16h2.56L21.88 4.67A1.94 1.94 0 0 0 22 4a1.89 1.89 0 0 0-.61-1.46A2 2 0 0 0 20 2a1.87 1.87 0 0 0-.68.13Z"
    />
  </svg>
);
export default SvgPencilSquare;
