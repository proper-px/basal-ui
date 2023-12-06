import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "@basal-ui/forms";
import "@basal-ui/forms/dist/style.css";

const meta = {
  title: "Forms/Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    id: "select",
    options: [
      { id: 1, name: "Option 1" },
      { id: 2, name: "Option 2" },
    ],
    labelKey: "name",
    valueKey: "id",
  },
};
