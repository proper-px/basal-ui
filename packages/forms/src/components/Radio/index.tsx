import { ComponentProps, forwardRef } from "react";

export type RadioProps = Omit<ComponentProps<"input">, "type"> & {
  label: string;
  id: string;
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  return (
    <div>
      <input type="radio" ref={ref} {...props} data-basal-radio />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
});
