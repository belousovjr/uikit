import type { Story, StoryDefault } from "@ladle/react";
import { Loader } from "./Loader";

export default {
  title: "Components/Loader",
} satisfies StoryDefault;

export const Regular: Story = () => (
  <div className="flex items-center gap-2 flex-wrap">
    <Loader />
    <Loader size={42} />
  </div>
);
