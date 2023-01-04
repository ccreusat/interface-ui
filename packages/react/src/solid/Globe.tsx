import { SVGProps } from "react";
const SvgGlobe = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.79 4.31A21.38 21.38 0 0 1 15 11H9.05a21.62 21.62 0 0 1 1.16-6.69C10.82 2.78 11.51 2 12 2s1.19.77 1.79 2.31Zm-5-1.79A10 10 0 0 0 2 11h5.08a23.31 23.31 0 0 1 1.25-7.44 11.19 11.19 0 0 1 .47-1.04Zm6.38 0c1.2 2.29 1.65 5.68 1.75 8.49H22a9.93 9.93 0 0 0-6.82-8.5ZM2 13a10.08 10.08 0 0 0 6.8 8.48A21.31 21.31 0 0 1 7 13Zm7.05 0c.18 5.1 1.65 9 2.95 9s2.78-3.9 2.95-9ZM17 13a21.15 21.15 0 0 1-1.75 8.48A9.94 9.94 0 0 0 22 13Z"
    />
  </svg>
);
export default SvgGlobe;
