import { ComponentProps } from "react";

export type LabelProps = ComponentProps<"label"> & {
  id: string;
};

export const Label = ({ children, ...props }: LabelProps) => {
  return (
    <label data-basal-label {...props}>
      {children}
    </label>
  );
};
