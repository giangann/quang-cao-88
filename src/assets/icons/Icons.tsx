import { SVGProps } from 'react';

export function MdiLightFactory(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m2 8l7 4.04V8l7 4V3h5v19H2V8m15 6l-7-4.27v4.04L3 9.73V21h17V4h-3v10M5 15h3v1H5v-1m0 3h5v1H5v-1m7-3h3v1h-3v-1m0 3h6v1h-6v-1Z"
      ></path>
    </svg>
  );
}
