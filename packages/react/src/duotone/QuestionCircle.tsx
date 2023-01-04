import { SVGProps } from "react";
const SvgQuestionCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 4a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm0 3a3 3 0 0 1 3 3 4.09 4.09 0 0 1-1.38 2.91 7.21 7.21 0 0 1-.56.53l-.4.31a1 1 0 0 1-1.41-.09 1 1 0 0 1 .13-1.44l.37-.31.47-.41A2.2 2.2 0 0 0 13 10a1 1 0 0 0-1-1 1 1 0 0 0-1 .75 1 1 0 0 1-1.22.72 1 1 0 0 1-.72-1.25A3 3 0 0 1 12 7Zm0 8a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"
    />
  </svg>
);
export default SvgQuestionCircle;
