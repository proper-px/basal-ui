import type { Meta, StoryObj } from "@storybook/react";

import { Radio } from "@basal-ui/forms";
import "@basal-ui/forms/dist/style.css";

const meta = {
  title: "Forms/Radio",
  component: Radio,

  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    label: "Radio",
    id: "radio",
    name: "radio",
  },
};
