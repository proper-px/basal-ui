import {
  ComponentProps,
  ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
} from "react";
import { Label } from "../Label";
import { FieldError } from "../FieldError";
import { FieldDescription } from "../FieldDescription";

export type FormFieldProps = ComponentProps<"div"> & {
  label: string;
  error?: string;
  description?: string;
};

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  ({ children, error, label, description }: FormFieldProps, ref) => {
    if (!children) {
      return null;
    }

    const { id, ...props } = isValidElement(children)
      ? children.props
      : undefined;

    const clonedChildProps = {
      id: id,
      "aria-describedby": description ? `${id}--description` : undefined,
      "aria-invalid": error ? true : undefined,
      "aria-errormessage": error ? `${id}--error` : undefined,
      ...props,
    };

    const clonedChild = cloneElement(children as ReactElement, {
      ...clonedChildProps,
    });

    return (
      <div ref={ref}>
        <Label htmlFor={id} id={`${id}--label`}>
          {label}
        </Label>
        {clonedChild}
        <FieldDescription id={`${id}--description`} description={description} />
        <FieldError id={`${id}--error`} message={error} />
      </div>
    );
  }
);
