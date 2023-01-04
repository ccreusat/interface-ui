import { SVGProps } from "react";
const SvgBell = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2a5.72 5.72 0 0 0-6 6v3c0 .32-.17.54-.72 1l-.4.38A4.26 4.26 0 0 0 3 16c0 1.35 1.06 1.83 2.69 2H18.31c1.63-.14 2.69-.62 2.69-2a4.34 4.34 0 0 0-1.88-3.66l-.43-.34c-.55-.45-.69-.68-.69-1V8a5.72 5.72 0 0 0-6-6Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      className="bell_svg__f96b0349-5fb2-4be0-8452-a28d56b9c87c"
      d="M12 4a3.73 3.73 0 0 1 4 4v3a3.07 3.07 0 0 0 1.41 2.53l.47.38a2.45 2.45 0 0 1 1.12 1.9 3.28 3.28 0 0 1-.85.16H5.88a3.28 3.28 0 0 1-.88-.16 2.45 2.45 0 0 1 1.09-1.9l.44-.38A3.07 3.07 0 0 0 8 11V8a3.73 3.73 0 0 1 4-4Z"
    />
    <path
      fill="currentColor"
      d="M9.81 19A1 1 0 0 0 9 20.62 3.94 3.94 0 0 0 12 22a4 4 0 0 0 3-1.34 1 1 0 0 0-1.5-1.32A2 2 0 0 1 12 20a2 2 0 0 1-1.5-.69 1 1 0 0 0-.69-.31Z"
    />
  </svg>
);
export default SvgBell;
