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
    <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z" />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M12 4c1.32 0 2.76 3 3 7H9c.25-4 1.68-7 3-7ZM8.44 4.83A15.79 15.79 0 0 0 7 11H4a8.05 8.05 0 0 1 4.44-6.17ZM15.55 4.83A8.06 8.06 0 0 1 19.94 11H17a15.74 15.74 0 0 0-1.45-6.17ZM4.06 13H7a15.92 15.92 0 0 0 1.43 6.16A8 8 0 0 1 4.06 13ZM9 13h6c-.22 4-1.65 7-3 7s-2.76-3-3-7ZM17 13h3a8.07 8.07 0 0 1-4.37 6.16A16.06 16.06 0 0 0 17 13Z"
    />
  </svg>
);
export default SvgGlobe;
