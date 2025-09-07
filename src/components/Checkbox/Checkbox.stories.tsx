import type { Story, StoryDefault } from "@ladle/react";
import { Checkbox } from "./Checkbox";
import { useState } from "react";

export default {
  title: "Components/Checkbox",
} satisfies StoryDefault;

function CheckboxView() {
  const [isActive, setIsActive] = useState(true);
  return (
    <div className="flex flex-wrap gap-8">
      <Checkbox checked={isActive} onChange={setIsActive}>
        Regular
      </Checkbox>

      <Checkbox checked={isActive} onChange={setIsActive} disabled>
        Disabled
      </Checkbox>
      <Checkbox
        checked={isActive}
        onChange={setIsActive}
        className="bg-red-50 hover:bg-red-60 has-checked:bg-green-60 text-primary-100"
      >
        <span className="text-red-100">Custom Colors</span>
      </Checkbox>
    </div>
  );
}

export const Regular: Story = () => <CheckboxView />;
