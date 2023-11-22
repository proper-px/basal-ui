import { ComponentProps } from "react";

export type FieldDescriptionProps = ComponentProps<"div"> & {
  description?: string;
  id: string;
};

export const FieldDescription = ({
  description,
  id,
}: FieldDescriptionProps) => {
  if (!description) return null;
  return (
    <div id={id} data-basal-field-description>
      {description}
    </div>
  );
};
