import { SVGProps } from "react";
const SvgAlarm = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 5a8 8 0 0 0-6.32 12.9L3.3 20.28a1 1 0 0 0 1.4 1.43l2.38-2.39A8.1 8.1 0 0 0 12 21a8 8 0 0 0 4.89-1.68l2.38 2.37a1 1 0 0 0 1.43 0 1 1 0 0 0 0-1.43l-2.37-2.36A8.11 8.11 0 0 0 20 13a8 8 0 0 0-8-8Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M12 7a6 6 0 1 0 6 6 6 6 0 0 0-6-6Zm0 2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 1-1Z"
    />
    <path
      fill="currentColor"
      d="M7 2a5 5 0 0 0-5 5 4.88 4.88 0 0 0 .44 2 1 1 0 0 0 1.81-.81A3 3 0 0 1 4 7a3 3 0 0 1 4.53-2.59 1 1 0 0 0 1.35-.35 1 1 0 0 0-.35-1.37A5 5 0 0 0 7 2ZM17 2a5 5 0 0 0-2.53.69 1 1 0 0 0-.35 1.37 1 1 0 0 0 1.35.35A3 3 0 0 1 20 7a3 3 0 0 1-.25 1.22 1 1 0 0 0 1.81.78A4.88 4.88 0 0 0 22 7a5 5 0 0 0-5-5Z"
    />
  </svg>
);
export default SvgAlarm;
