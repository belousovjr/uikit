import type { Story, StoryDefault } from "@ladle/react";

import { Textfield } from "./Textfield";
import { SearchIcon, UserIcon } from "lucide-react";

export default {
  title: "Components/Textfield",
} satisfies StoryDefault;

export const Primary: Story = () => (
  <div className="grid items-end grid-cols-1 lg:grid-cols-2 gap-4">
    <Textfield size="sm" defaultValue="Small" />
    <Textfield size="md" defaultValue="Medium" />
    <Textfield size="lg" defaultValue="Large" />
    <Textfield label="Label" placeholder="With title" />
    <Textfield leftIcon={<SearchIcon />} placeholder="Left Icon" />
    <Textfield rightIcon={<UserIcon />} placeholder="Right Icon" />
    <Textfield
      leftIcon={<SearchIcon />}
      rightIcon={<UserIcon />}
      placeholder="Two Icons"
    />
    <Textfield disabled placeholder="Disabled" />
  </div>
);
export const Multiline: Story = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <Textfield defaultValue="Small" size="sm" multiline />
    <Textfield defaultValue="Medium" size="md" multiline />
    <Textfield defaultValue="Large" size="lg" multiline />
    <Textfield placeholder="One line" multiline rows={1} />
    <Textfield placeholder="Five lines" multiline rows={5} />
    <Textfield placeholder="Disabled" multiline disabled />
  </div>
);
