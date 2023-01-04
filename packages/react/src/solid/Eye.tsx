import { SVGProps } from "react";
const SvgEye = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 4a9.8 9.8 0 0 0-7.5 3.84 16.66 16.66 0 0 0-1.81 2.57 12 12 0 0 0-.6 1.18 1.16 1.16 0 0 0 0 .82 12 12 0 0 0 .6 1.18 16.66 16.66 0 0 0 1.81 2.57A9.8 9.8 0 0 0 12 20a9.78 9.78 0 0 0 7.51-3.84 16.74 16.74 0 0 0 1.82-2.57 11.4 11.4 0 0 0 .59-1.18 1.06 1.06 0 0 0 0-.82 11.4 11.4 0 0 0-.59-1.18 16.74 16.74 0 0 0-1.82-2.57A9.78 9.78 0 0 0 12 4Zm0 4a4 4 0 1 1-4 4 4 4 0 0 1 4-4Zm0 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2Z"
    />
  </svg>
);
export default SvgEye;
