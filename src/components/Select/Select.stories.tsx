import type { Story, StoryDefault } from "@ladle/react";
import { Select } from "./Select";
import { useState } from "react";

export default {
  title: "Components/Select",
} satisfies StoryDefault;

const options = [
  { value: "a", name: "A" },
  { value: "b", name: "B" },
];

function SelectView() {
  const [value, setValue] = useState(options[0].value);
  return (
    <div className="grid gap-8 grid-cols-2">
      <Select
        options={options}
        value={value}
        onChange={setValue}
        label="Small"
        size="sm"
      />
      <Select
        options={options}
        value={value}
        onChange={setValue}
        label="Middle"
      />
      <Select
        options={options}
        value={value}
        onChange={setValue}
        label="Large"
        size="lg"
      />
      <Select options={options} defaultValue={"b"} onChange={setValue} />
      <Select
        options={options}
        value={value}
        onChange={setValue}
        label="Disabled"
        disabled
      />
    </div>
  );
}

export const Regular: Story = () => <SelectView />;
