import { SVGProps } from "react";
const SvgChatDots = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2A10 10 0 0 0 2 12a11.13 11.13 0 0 0 .59 3.39l-.31 1.36c-.84 3.37 1.53 5.81 4.91 5l1.37-.33A10.79 10.79 0 0 0 12 22a10 10 0 0 0 0-20Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M12 4a8 8 0 0 0-8 8 8.45 8.45 0 0 0 .56 3 .92.92 0 0 1 0 .59l-.37 1.66c-.49 1.93.59 3 2.5 2.53l1.69-.4a.86.86 0 0 1 .59 0A8.47 8.47 0 0 0 12 20a8 8 0 0 0 0-16Zm-4 7a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm4 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm4 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"
    />
  </svg>
);
export default SvgChatDots;
