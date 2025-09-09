import { fireEvent, render, screen } from "@testing-library/react";
import { Toggle } from "./Toggle";
import userEvent from "@testing-library/user-event";

test("renders toggle", () => {
  render(<Toggle>Click</Toggle>);
  expect(screen.getByText("Click")).toBeInTheDocument();
});

test("calls onChange callback when toggle is clicked", () => {
  const handleClick = vi.fn();
  render(<Toggle onChange={handleClick}>Toggle</Toggle>);
  const toggleElement = screen.getByText("Toggle");
  fireEvent.click(toggleElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("no calls onChange callback when disabled toggle is clicked", () => {
  const handleClick = vi.fn();
  render(
    <Toggle onChange={handleClick} disabled>
      Toggle
    </Toggle>
  );
  const toggleElement = screen.getByText("Toggle");
  fireEvent.click(toggleElement);
  expect(handleClick).toHaveBeenCalledTimes(0);
});

test("tab moves focus between toggles", async () => {
  const user = userEvent.setup();
  render(
    <>
      <Toggle>Toggle</Toggle>
      <Toggle>Toggle</Toggle>
    </>
  );

  const [{ parentElement: firstToggle }, { parentElement: secondToggle }] =
    screen.getAllByLabelText("Toggle");

  firstToggle!.focus();
  expect(firstToggle).toHaveFocus();

  await user.tab();
  expect(secondToggle).toHaveFocus();

  await user.tab({ shift: true });
  expect(firstToggle).toHaveFocus();
});

test("renders custom toggle circle", () => {
  render(<Toggle circleElement="C">Click</Toggle>);
  expect(screen.getByText("C")).toBeInTheDocument();
});
