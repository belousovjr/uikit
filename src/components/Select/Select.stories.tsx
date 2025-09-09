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
    <div className="flex flex-wrap gap-4">
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
        label="Medium"
        size="md"
      />
      <Select
        options={options}
        value={value}
        onChange={setValue}
        label="Large"
        size="lg"
        className="min-w-20"
      />
      <Select
        label="With Default"
        options={options}
        defaultValue={"b"}
        onChange={setValue}
      />
      <Select
        options={options}
        value={value}
        onChange={setValue}
        label="Disabled"
        disabled
        className="flex-1"
      />
    </div>
  );
}

export const Regular: Story = () => <SelectView />;
