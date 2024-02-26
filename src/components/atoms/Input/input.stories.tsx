import type { Meta, StoryObj } from "@storybook/react";
import Input from "./index";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Components/Input",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {},
};
