import type { Story, StoryDefault } from "@ladle/react";
import { Notification } from "./Notification";

export default {
  title: "Components/Notification",
} satisfies StoryDefault;

function NotificationToneView({ isLight = false }) {
  return (
    <div className="grid gap-2">
      <Notification variant="primary" light={isLight}>
        Primary
      </Notification>
      <Notification variant="success" light={isLight}>
        Success
      </Notification>
      <Notification variant="error" light={isLight}>
        Error
      </Notification>
      <Notification variant="alert" light={isLight}>
        Alert
      </Notification>
      <Notification variant="neutral" light={isLight}>
        Neutral
      </Notification>
    </div>
  );
}

export const Solid: Story = () => <NotificationToneView />;
export const Light: Story = () => <NotificationToneView isLight />;
