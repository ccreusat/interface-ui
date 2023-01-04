import { SVGProps } from "react";
const SvgCursor = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.87 2.44a7 7 0 0 0-3 .72L4 9c-2.22 1.08-2 3.15.44 3.69l5.69 1.25 1.25 5.68C11.88 22 14 22.26 15 20l5.84-11.91c1.54-3.38.52-5.6-1.97-5.65Zm-.41 2c1.33-.19 1.52.74.57 2.84l-5.75 11.78-1.38-6.22a1 1 0 0 0-.75-.75l-6.22-1.37L16.78 5a6.16 6.16 0 0 1 1.68-.59Z"
    />
  </svg>
);
export default SvgCursor;
