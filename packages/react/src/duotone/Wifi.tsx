import { SVGProps } from "react";
const SvgWifi = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 10a5.08 5.08 0 0 0-4.14 2.15 1 1 0 0 0 .25 1.38 1 1 0 0 0 1.41-.25 3 3 0 0 1 5 0 1 1 0 1 0 1.63-1.13A5 5 0 0 0 12 10Z"
    />
    <path
      fill="currentColor"
      d="M12 6a9 9 0 0 0-6.93 3.22 1 1 0 0 0 .13 1.4 1 1 0 0 0 1.41-.12A7 7 0 0 1 12 8a6.93 6.93 0 0 1 5.36 2.5 1 1 0 0 0 1.45.12 1 1 0 0 0 .09-1.4A9 9 0 0 0 12 6Z"
    />
    <path
      fill="currentColor"
      d="M12 2a13 13 0 0 0-9.75 4.34 1 1 0 0 0 .1 1.44 1 1 0 0 0 1.41-.09 11.06 11.06 0 0 1 16.49 0 1 1 0 1 0 1.5-1.32A13.05 13.05 0 0 0 12 2ZM12 13.84A2.57 2.57 0 0 0 9.93 15l-2.51 3.62A2 2 0 0 0 9.18 22h5.64a2 2 0 0 0 1.76-3.38L14.07 15A2.54 2.54 0 0 0 12 13.84Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M12 15.84c.14 0 .29.1.44.31L15 19.78c.23.33.28.22-.13.22H9.18c-.4 0-.36.11-.13-.22l2.51-3.63c.15-.21.3-.31.44-.31Z"
    />
  </svg>
);
export default SvgWifi;
