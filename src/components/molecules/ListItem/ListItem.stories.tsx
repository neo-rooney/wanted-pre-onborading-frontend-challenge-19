import type { Meta, StoryObj } from "@storybook/react";
import ListItem from "./index";

const meta: Meta<typeof ListItem> = {
  component: ListItem,
  title: "Components/ListItem",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
  args: {},
};
