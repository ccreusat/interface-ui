import { SVGProps } from "react";
const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm4 6.84 4.75 3c.4.28.4.1 0 .38l-4.75 3Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M6 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm2.66 2.47a1.4 1.4 0 0 1 1.43.09l5.72 3.63c1.57 1.08 1.61 2.57 0 3.69l-5.72 3.62A1.34 1.34 0 0 1 8 16.34V7.72a1.36 1.36 0 0 1 .66-1.25Z"
    />
  </svg>
);
export default SvgPlay;
