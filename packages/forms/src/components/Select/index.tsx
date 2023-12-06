import { ComponentProps, forwardRef, Ref } from "react";

export type SelectProps<T> = ComponentProps<"select"> & {
  options: T[];
  labelKey: keyof T;
  valueKey: keyof T;
  id: string;
};

export const Select = forwardRef(
  <T extends Record<string, unknown>>(
    { options, labelKey, valueKey, ...props }: SelectProps<T>,
    ref: Ref<HTMLSelectElement>
  ) => {
    return (
      <select {...props} ref={ref} data-basal-select>
        {options.map((item) => {
          return (
            <option value={item[valueKey] as string}>
              {item[labelKey] as string}
            </option>
          );
        })}
      </select>
    );
  }
);
