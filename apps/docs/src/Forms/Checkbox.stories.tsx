import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "@basal-ui/forms";
import "@basal-ui/forms/dist/style.css";

const meta = {
  title: "Forms/Checkbox",
  component: Checkbox,

  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    label: "Checkbox",
    id: "checkbox",
    name: "checkbox",
  },
};
