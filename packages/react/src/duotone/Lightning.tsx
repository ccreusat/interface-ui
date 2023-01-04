import { SVGProps } from "react";
const SvgLightning = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.28 2a1 1 0 0 0-1.13.44l-7 11A1 1 0 0 0 5 15h6v6a1 1 0 0 0 1.84.54l7-11A1 1 0 0 0 19 9h-6V3a1 1 0 0 0-.72-1Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M11 6.44V10a1 1 0 0 0 1 1h5.18L13 17.56V14a1 1 0 0 0-1-1H6.81Z"
    />
  </svg>
);
export default SvgLightning;
