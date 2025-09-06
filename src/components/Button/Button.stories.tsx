import type { Story, StoryDefault } from "@ladle/react";

import { Button } from "./Button";
import { CheckIcon, SettingsIcon } from "lucide-react";
import { ButtonProps } from "./types";
import { useState } from "react";

export default {
  title: "Components/Button",
} satisfies StoryDefault;

function ButtonSizesView({
  ...props
}: Omit<ButtonProps, "size" | "disabled" | "loading" | "onClick">) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Button {...props} size="sm">
        Small
      </Button>
      <Button {...props} size="md">
        Medium
      </Button>
      <Button {...props} size="lg">
        Large
      </Button>
      <Button {...props} icon={<CheckIcon />}>
        With Icon
      </Button>
      <Button {...props} icon={<SettingsIcon />} />
      <Button disabled {...props}>
        Disabled
      </Button>
      <Button
        onClick={() => {
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        }}
        loading={isLoading}
        {...props}
        size="sm"
      >
        Loading By Click
      </Button>
    </div>
  );
}

export const Primary: Story = () => <ButtonSizesView variant="primary" />;
export const Secondary: Story = () => <ButtonSizesView variant="secondary" />;
export const White: Story = () => <ButtonSizesView variant="white" />;
export const Destructive: Story = () => (
  <ButtonSizesView variant="destructive" />
);
export const DestructiveSecondary: Story = () => (
  <ButtonSizesView variant="destructiveSecondary" />
);
