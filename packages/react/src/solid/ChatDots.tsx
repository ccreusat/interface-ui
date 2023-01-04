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
      d="M12 2A10 10 0 0 0 2 12a10.29 10.29 0 0 0 .62 3.25l-.34 1.5c-.84 3.37 1.53 5.81 4.91 5l1.47-.34A10.44 10.44 0 0 0 12 22a10 10 0 0 0 0-20Zm-4 9a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm4 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm4 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"
    />
  </svg>
);
export default SvgChatDots;
