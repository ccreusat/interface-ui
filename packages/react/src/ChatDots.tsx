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
      d="M12 2A10 10 0 0 0 2 12a11.52 11.52 0 0 0 .6 3.45l-.32 1.3c-.84 3.37 1.53 5.81 4.91 5l1.38-.33A10.91 10.91 0 0 0 12 22a10 10 0 0 0 0-20Zm0 2a8 8 0 0 1 0 16 8.47 8.47 0 0 1-3-.59.86.86 0 0 0-.59 0l-1.69.4c-1.91.48-3-.6-2.5-2.53l.38-1.62a1 1 0 0 0 0-.63A8.45 8.45 0 0 1 4 12a8 8 0 0 1 8-8Zm-5 8a1 1 0 1 1 1 1 1 1 0 0 1-1-1Zm4 0a1 1 0 1 1 1 1 1 1 0 0 1-1-1Zm4 0a1 1 0 1 1 1 1 1 1 0 0 1-1-1Z"
    />
  </svg>
);
export default SvgChatDots;
