import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox, Fieldset, Radio } from "@basal-ui/forms";
import "@basal-ui/forms/dist/style.css";

const meta = {
  title: "Forms/Fieldset",
  component: Fieldset,
  argTypes: {
    description: {
      control: {
        type: "text",
      },
    },
    error: {
      control: {
        type: "text",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithRadios: Story = {
  args: {
    legend: "Toppings",
    id: "toppings",
    children: (
      <>
        <Radio
          label="Sausage"
          id="toppings-sausage"
          name="toppings"
          value="sausage"
        />
        <Radio
          label="Peppers"
          id="toppings-peppers"
          name="toppings"
          value="peppers"
        />
      </>
    ),
  },
};

export const WithCheckboxes: Story = {
  args: {
    legend: "Toppings",
    id: "toppings",
    children: (
      <>
        <Checkbox
          label="Sausage"
          id="toppings-sausage"
          name="toppings"
          value="sausage"
        />
        <Checkbox
          label="Peppers"
          id="toppings-peppers"
          name="toppings"
          value="peppers"
        />
      </>
    ),
  },
};
