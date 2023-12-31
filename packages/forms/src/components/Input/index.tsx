import { ComponentProps, forwardRef } from "react";

export type InputProps = ComponentProps<"input"> & {
  id: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input ref={ref} {...props} data-basal-input />;
});

export { Input };
