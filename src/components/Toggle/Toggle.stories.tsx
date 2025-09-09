import type { Story, StoryDefault } from "@ladle/react";
import { Toggle } from "./Toggle";
import { useState } from "react";
import { EarthIcon, EarthLockIcon } from "lucide-react";

export default {
  title: "Components/Toggle",
} satisfies StoryDefault;

function ToggleView() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex flex-wrap gap-8">
      <Toggle active={isActive} onChange={setIsActive} size="sm">
        Small
      </Toggle>
      <Toggle active={isActive} onChange={setIsActive} size="md">
        Medium
      </Toggle>
      <Toggle active={isActive} onChange={setIsActive} size="lg">
        Large
      </Toggle>
      <Toggle active={isActive} onChange={setIsActive} disabled>
        Disabled
      </Toggle>
      <Toggle
        active={isActive}
        onChange={setIsActive}
        className="bg-red-50 group-has-hover/toggle-wrap:bg-red-60 has-checked:bg-green-60 text-primary-100"
      >
        <span className="text-red-100">Custom Colors</span>
      </Toggle>
      <Toggle
        active={isActive}
        onChange={setIsActive}
        circleElement={
          <span className="bg-black rounded-full">
            <EarthIcon
              className="group-has-checked/checkbox:hidden"
              size={16}
            />
            <EarthLockIcon
              className="hidden group-has-checked/checkbox:block"
              size={16}
            />
          </span>
        }
      >
        Custom Circle
      </Toggle>
    </div>
  );
}

export const Regular: Story = () => <ToggleView />;
