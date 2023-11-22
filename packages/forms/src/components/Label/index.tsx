import { ComponentProps } from "react";

export type LabelProps = ComponentProps<"label">;

export const Label = ({ children, ...props }: LabelProps) => {
  return (
    <label data-basal-label {...props}>
      {children}
    </label>
  );
};
