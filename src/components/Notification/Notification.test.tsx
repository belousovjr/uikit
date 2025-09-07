import { fireEvent, render, screen } from "@testing-library/react";
import { Notification } from "./Notification";

test("renders notification", () => {
  render(<Notification>Notification</Notification>);
  expect(screen.getByText("Notification")).toBeInTheDocument();
});

test("calls onClose callback when close notification is clicked", () => {
  const handleClose = vi.fn();
  render(<Notification onClose={handleClose}>Notification</Notification>);
  const closeButtonElement = screen.getByTitle("Close Notification");
  fireEvent.click(closeButtonElement);
  expect(handleClose).toHaveBeenCalledTimes(1);
});
