export type FieldErrorProps = {
  message?: string;
  id: string;
};

export const FieldError = ({ message, id }: FieldErrorProps) => {
  if (!message) return null;

  return (
    <div data-basal-field-error id={id}>
      {message}
    </div>
  );
};
