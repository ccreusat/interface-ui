import { SVGProps } from "react";
const SvgLogin = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 7a1 1 0 0 0-.72 1.72L14.56 11H3a1 1 0 0 0 0 2h11.56l-2.28 2.28a1 1 0 1 0 1.44 1.44l4-4A1 1 0 0 0 18 12a1 1 0 0 0-.28-.72l-4-4A1 1 0 0 0 13 7Z"
    />
    <path
      fill="currentColor"
      d="M16 2a1 1 0 0 0 0 2h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2a1 1 0 1 0 0 2h2a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z"
    />
  </svg>
);
export default SvgLogin;
