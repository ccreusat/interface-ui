import { SVGProps } from "react";
const SvgCheckCircle = (props: SVGProps<SVGSVGElement>) => (
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
      className="check-circle_svg__af53ffa6-171b-418b-afbf-3032a2942a8f"
      d="M12 4a8 8 0 1 1-8 8 8 8 0 0 1 8-8Z"
    />
    <path
      fill="currentColor"
      d="M16 9a1 1 0 0 0-.72.28L11 13.56l-2.28-2.28a1 1 0 1 0-1.44 1.44l3 3a1 1 0 0 0 1.44 0l5-5A1 1 0 0 0 16 9Z"
    />
  </svg>
);
export default SvgCheckCircle;
