import { ComponentProps, forwardRef } from "react";

export type CheckboxProps = Omit<ComponentProps<"input">, "type"> & {
  id: string;
  label: string;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    return (
      <div data-basal-checkbox>
        <input type="checkbox" ref={ref} {...props} />
        <label htmlFor={props.id}>{props.label}</label>
      </div>
    );
  }
);
