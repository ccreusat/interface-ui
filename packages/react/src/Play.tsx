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
      d="M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Zm0 2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm2.66 2.47A1.36 1.36 0 0 0 8 7.72v8.62a1.33 1.33 0 0 0 2.12 1.16l5.72-3.62c1.61-1.12 1.57-2.61 0-3.69l-5.75-3.63a1.4 1.4 0 0 0-1.43-.09ZM10 8.84l4.72 3c.21.15.22.17.25.16a1.15 1.15 0 0 1-.22.19l-4.75 3Z"
    />
  </svg>
);
export default SvgPlay;
