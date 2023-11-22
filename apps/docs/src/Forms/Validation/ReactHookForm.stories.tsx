import {
  Checkbox,
  Fieldset,
  FormField,
  Input,
  Select,
  Textarea,
} from "@basal-ui/forms";
import { useForm } from "react-hook-form";
import "@basal-ui/forms/dist/style.css";

const meta = {
  title: "Forms/Validation",
  tags: ["autodocs"],
};

export default meta;

export const ReactHookForm = () => {
  interface FormValues {
    firstName: string;
    lastName: string;
    state: string;
    zip: string;
    favoriteToppings: string;
    comments: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField label="First Name" error={errors.firstName?.message}>
          <Input
            {...register("firstName", { required: "First name is required" })}
            id="firstName"
          />
        </FormField>
        <FormField label="Last Name" error={errors.lastName?.message}>
          <Input
            {...register("lastName", { required: "Last name is required" })}
            id="lastName"
          />
        </FormField>
        <FormField label="State">
          <Select
            {...register("state")}
            id="state"
            options={[
              { value: "MO", label: "Missouri" },
              { value: "KS", label: "Kansas" },
            ]}
            labelKey="label"
            valueKey="value"
          />
        </FormField>
        <FormField
          label="Zip Code"
          description="Please enter a 5 digit zip code"
          error={errors.zip?.message}
        >
          <Input
            {...register("zip", { required: "Zip Code is required" })}
            id="zip"
          />
        </FormField>
        <Fieldset
          legend="Favorite Toppings"
          id="toppings"
          error={errors.favoriteToppings?.message}
        >
          <Checkbox
            {...register("favoriteToppings", {
              required: "Please select at least one topping",
            })}
            value="sausage"
            id="toppings-sausage"
            label="Sausage"
          />
          <Checkbox
            {...register("favoriteToppings", {
              required: "Please select at least one topping",
            })}
            value="peppers"
            id="toppings-peppers"
            label="Peppers"
          />
        </Fieldset>
        <FormField label="Comments">
          <Textarea {...register("comments")} id="comments" />
        </FormField>
        <input type="submit" />
      </form>
    </>
  );
};
