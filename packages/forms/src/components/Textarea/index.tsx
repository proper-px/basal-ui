import { ComponentProps, forwardRef } from "react";

export type TextareaProps = ComponentProps<"textarea">;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    return <textarea ref={ref} {...props} data-basal-textarea />;
  }
);
