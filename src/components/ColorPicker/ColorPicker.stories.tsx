import type { Story, StoryDefault } from "@ladle/react";
import { ColorPicker } from "./ColorPicker";
import { useState } from "react";

export default {
  title: "Components/ColorPicker",
} satisfies StoryDefault;

function ColorPickerView() {
  const [value, setValue] = useState<string>("#ff0044");
  return (
    <div className="flex text-center flex-wrap gap-8">
      <div className="flex gap-4 items-center">
        Small
        <ColorPicker value={value} onChange={setValue} size="sm" />
      </div>
      <div className="flex gap-4 items-center">
        Medium
        <ColorPicker value={value} onChange={setValue} size="md" />
      </div>
      <div className="flex gap-4 items-center">
        Large
        <ColorPicker value={value} onChange={setValue} size="lg" />
      </div>
      <div className="flex gap-4 items-center">
        Fixed
        <ColorPicker value={value} />
      </div>
      <div className="flex gap-4 items-center">
        Free
        <ColorPicker />
      </div>
      <div className="flex gap-4 items-center">
        Disabled
        <ColorPicker disabled value={value} onChange={setValue} />
      </div>
    </div>
  );
}

export const Regular: Story = () => <ColorPickerView />;
