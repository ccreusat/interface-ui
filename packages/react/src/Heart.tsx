import { SVGProps } from "react";
const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.5 3A5.5 5.5 0 0 0 2 8.5c0 3.18 1.81 6.19 4.81 8.94a28.47 28.47 0 0 0 3.19 2.5c.38.26.74.49 1.06.68l.41.25a1 1 0 0 0 1 0l.41-.25c.32-.19.68-.42 1.06-.68a28.47 28.47 0 0 0 3.22-2.5c3-2.75 4.81-5.76 4.81-8.94A5.5 5.5 0 0 0 16.5 3 5.82 5.82 0 0 0 12 5.31 5.7 5.7 0 0 0 7.5 3Zm0 2a3.69 3.69 0 0 1 3 1.56l.66 1a1 1 0 0 0 1.65 0l.69-1a3.86 3.86 0 0 1 3-1.56A3.5 3.5 0 0 1 20 8.5c0 2.5-1.56 5-4.19 7.44a26.07 26.07 0 0 1-3 2.34c-.3.21-.58.37-.84.53-.26-.16-.54-.32-.84-.53a26.07 26.07 0 0 1-3-2.34C5.56 13.53 4 11 4 8.5A3.5 3.5 0 0 1 7.5 5Z"
    />
  </svg>
);
export default SvgHeart;
