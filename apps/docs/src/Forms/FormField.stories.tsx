import type { Meta, StoryObj } from "@storybook/react";

import { FormField, Input } from "@basal-ui/forms";
import "@basal-ui/forms/dist/style.css";

const meta = {
  title: "Forms/FormField",
  component: FormField,

  tags: ["autodocs"],
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    label: "First name",
    children: <Input id="firstName" />,
    description: "",
    error: "",
  },
};
