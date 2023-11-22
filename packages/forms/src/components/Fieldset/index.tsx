import { ComponentProps } from "react";
import { FieldDescription } from "../FieldDescription";
import { FieldError } from "../FieldError";

export type FieldsetProps = ComponentProps<"fieldset"> & {
  legend: string;
  description?: string;
  error?: string;
};

export const Fieldset = ({
  children,
  legend,
  id,
  description,
  error,
  ...props
}: FieldsetProps) => {
  const conditionalProps = {
    "aria-describedby": description ? `${id}--description` : undefined,
    "aria-invalid": error ? true : undefined,
    "aria-errormessage": error ? `${id}--error` : undefined,
  };

  return (
    <fieldset {...props} {...conditionalProps} data-basal-fieldset>
      <legend>{legend}</legend>
      {children}
      <FieldDescription id={`${id}--description`} description={description} />
      <FieldError id={`${id}--error`} message={error} />
    </fieldset>
  );
};
