import { SVGProps } from "react";
const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.07 12v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0Zm3-1a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1Zm-8 0a1 1 0 0 0-1 1v6a4 4 0 0 0 4 4h6A4 4 0 0 0 19 18v-6a1 1 0 0 0-2 0v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6a1 1 0 0 0-.93-1.07Zm15-5.07V8a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V6.07A4 4 0 0 1 7 2.09l10.1-.18a4 4 0 0 1 3.97 3.95ZM7 4.08a2 2 0 0 0-2 2V7h14V5.86a2 2 0 0 0-1.94-2Z"
    />
  </svg>
);
export default SvgTrash;
