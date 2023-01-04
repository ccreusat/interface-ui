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
      d="M12 5.31A5.84 5.84 0 0 1 16.5 3 5.5 5.5 0 0 1 22 8.5c0 3.18-1.81 6.19-4.81 8.94a28.47 28.47 0 0 1-3.19 2.5c-.38.26-.74.49-1.06.68l-.41.26a1.1 1.1 0 0 1-1 0l-.41-.26c-.32-.19-.68-.42-1.06-.68a28.47 28.47 0 0 1-3.22-2.5C3.81 14.69 2 11.68 2 8.5A5.5 5.5 0 0 1 7.5 3 5.7 5.7 0 0 1 12 5.31Z"
    />
  </svg>
);
export default SvgHeart;
