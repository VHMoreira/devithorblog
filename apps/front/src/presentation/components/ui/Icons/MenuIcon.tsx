import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";

const SvgMenuIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 201 107"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M0 10C0 4.477 4.477 0 10 0h191v25H10C4.477 25 0 20.523 0 15v-5ZM0 92c0-5.523 4.477-10 10-10h191v25H10c-5.523 0-10-4.477-10-10v-5ZM0 51c0-5.523 4.477-10 10-10h147v25H10C4.477 66 0 61.523 0 56v-5Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgMenuIcon);
export default ForwardRef;
