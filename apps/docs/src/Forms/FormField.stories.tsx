import type { Meta, StoryObj } from "@storybook/react";

import { FormField, Input, Select, Textarea } from "@basal-ui/forms";
import "@basal-ui/forms/dist/style.css";

const meta = {
  title: "Forms/FormField",
  component: FormField,
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
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithInput: Story = {
  args: {
    label: "First name",
    children: <Input id="firstName" />,
  },
};

export const WithTextarea: Story = {
  args: {
    label: "Comments",
    children: <Textarea id="comments" />,
  },
};

export const WithSelect: Story = {
  args: {
    label: "Comments",
    children: (
      <Select
        id="comments"
        options={[
          { value: "", label: "Please select an option" },
          { value: "1", label: "Option 1" },
        ]}
        labelKey="label"
        valueKey="value"
      />
    ),
  },
};
