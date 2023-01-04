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
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 2c1.31 0 2.82 3 3 7H9c.24-4 1.68-7 3-7Zm-3.56.84A16 16 0 0 0 7 11H4a8 8 0 0 1 4.44-6.16Zm7.1 0A8 8 0 0 1 19.93 11H17a15.58 15.58 0 0 0-1.46-6.17ZM4.05 13H7a16.83 16.83 0 0 0 1.44 6.17A8.11 8.11 0 0 1 4.05 13Zm5 0h6c-.22 4-1.66 7-3 7S9.22 17 9 13Zm8 0h3a8 8 0 0 1-4.38 6.16A15.77 15.77 0 0 0 17 13Z"
    />
  </svg>
);
export default SvgGlobe;
