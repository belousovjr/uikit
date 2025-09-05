import type { Story, StoryDefault } from "@ladle/react";

import { Button } from "./Button";

export default {
  title: "Components/Button",
} satisfies StoryDefault;

export const Primary: Story = () => <Button>Primary Button</Button>;
export const Disabled: Story = () => <Button disabled>Disabled</Button>;
