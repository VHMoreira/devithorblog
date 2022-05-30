import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";

const SvgCloseIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 161 161"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M7.668 149.796c-3.905-3.905-3.905-10.236 0-14.142L142.725.597l17.678 17.678L25.346 153.332c-3.906 3.905-10.237 3.905-14.143 0l-3.535-3.536Z"
    />
    <path
      d="M10.607 7.071c3.905-3.905 10.236-3.905 14.142 0l135.057 135.057-17.678 17.678L7.071 24.749c-3.905-3.905-3.905-10.237 0-14.142l3.536-3.536Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCloseIcon);
export default ForwardRef;
