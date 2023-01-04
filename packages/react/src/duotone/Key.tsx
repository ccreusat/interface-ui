import { SVGProps } from "react";
const SvgKey = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.09 2a1 1 0 0 0-.81.28s-3 3-3.85 3.88a3.77 3.77 0 0 0-.87 3.68 1.82 1.82 0 0 1-.37 1.57l-4.91 4.87A1 1 0 0 0 2 17v1a4 4 0 0 0 4 4h1a1 1 0 0 0 .72-.28l4.87-4.91a1.8 1.8 0 0 1 1.57-.37 3.76 3.76 0 0 0 3.65-.84l3.91-3.88a1 1 0 0 0 .28-.81A9.88 9.88 0 0 0 13.09 2Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="m13.38 4.06-3.54 3.5a1.8 1.8 0 0 0-.37 1.69 3.74 3.74 0 0 1-.88 3.56L4 17.41V18a2 2 0 0 0 2 2h.59l4.6-4.59a3.69 3.69 0 0 1 3.53-.88 1.82 1.82 0 0 0 1.78-.44c1.15-1.13 3.44-3.43 3.44-3.43a7.77 7.77 0 0 0-6.56-6.6ZM15 8a1 1 0 1 1-.72.28A1 1 0 0 1 15 8Z"
    />
  </svg>
);
export default SvgKey;
