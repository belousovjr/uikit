import type { Story, StoryDefault } from "@ladle/react";
import { ColorPicker } from "./ColorPicker";
import { useState } from "react";

export default {
  title: "Components/ColorPicker",
} satisfies StoryDefault;

function ColorPickerView() {
  const [value, setValue] = useState<string>("");
  return (
    <div className="flex flex-wrap gap-8">
      <ColorPicker value={value} onChange={setValue} size="sm" />
      <ColorPicker value={value} onChange={setValue} />
      <ColorPicker value={value} onChange={setValue} size="lg" />
    </div>
  );
}

export const Regular: Story = () => <ColorPickerView />;
