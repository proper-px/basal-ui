import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "@basal-ui/forms";
import "@basal-ui/forms/dist/style.css";

const meta = {
  title: "Forms/Textarea",
  component: Textarea,

  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    placeholder: "Textarea",
  },
};
