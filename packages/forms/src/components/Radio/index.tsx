import { ComponentProps, forwardRef } from "react";

export type RadioProps = Omit<ComponentProps<"input">, "type"> & {
  label: string;
  id: string;
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  return (
    <div data-basal-radio>
      <input type="radio" ref={ref} {...props} />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
});
