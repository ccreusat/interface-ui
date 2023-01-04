import { SVGProps } from "react";
const SvgMail = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 17c2.18 0 7.2-3.66 10-6.75V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7.75C4.8 13.34 9.82 17 12 17ZM6 3a4 4 0 0 0-4 4c0 1.39 7.84 8 10 8s10-6.61 10-8a4 4 0 0 0-4-4Z"
    />
  </svg>
);
export default SvgMail;
