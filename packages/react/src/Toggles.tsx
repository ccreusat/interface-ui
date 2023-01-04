import { SVGProps } from "react";
const SvgToggles = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.5 2a4.54 4.54 0 0 0-2.83 1H5.5a3.5 3.5 0 0 0 0 7h9.18a4.5 4.5 0 1 0 2.82-8Zm0 2A2.5 2.5 0 1 1 15 6.5 2.5 2.5 0 0 1 17.5 4Zm-12 1h7.77A4.78 4.78 0 0 0 13 6.5a4.38 4.38 0 0 0 .27 1.5H5.5a1.5 1.5 0 0 1 0-3Zm1 8a4.5 4.5 0 0 0 0 9 4.65 4.65 0 0 0 2.82-1h9.18a3.5 3.5 0 0 0 0-7H9.34a4.55 4.55 0 0 0-2.84-1Zm0 2a2.5 2.5 0 0 1 1.76 4.28A2.47 2.47 0 0 1 6.5 20a2.5 2.5 0 0 1 0-5Zm4.22 1h7.78a1.5 1.5 0 0 1 0 3h-7.77a4 4 0 0 0 .27-1.5 4.39 4.39 0 0 0-.28-1.5Z"
    />
  </svg>
);
export default SvgToggles;
