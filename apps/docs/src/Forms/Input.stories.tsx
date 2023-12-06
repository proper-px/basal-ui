import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@basal-ui/forms";
import "@basal-ui/forms/dist/style.css";

const meta = {
  title: "Forms/Input",
  component: Input,

  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    placeholder: "First name",
    id: "firstName",
  },
};
