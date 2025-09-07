import { fireEvent, render, screen } from "@testing-library/react";
import { Checkbox } from "./Checkbox";
import userEvent from "@testing-library/user-event";

test("renders checkbox", () => {
  render(<Checkbox>Click</Checkbox>);
  expect(screen.getByText("Click")).toBeInTheDocument();
});

test("calls onChange callback when checkbox is clicked", () => {
  const handleClick = vi.fn();
  render(<Checkbox onChange={handleClick}>Checkbox</Checkbox>);
  const checkboxElement = screen.getByText("Checkbox");
  fireEvent.click(checkboxElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("no calls onChange callback when disabled checkbox is clicked", () => {
  const handleClick = vi.fn();
  render(
    <Checkbox onChange={handleClick} disabled>
      Checkbox
    </Checkbox>
  );
  const checkboxElement = screen.getByText("Checkbox");
  fireEvent.click(checkboxElement);
  expect(handleClick).toHaveBeenCalledTimes(0);
});

test("tab moves focus between checkboxs", async () => {
  const user = userEvent.setup();
  render(
    <>
      <Checkbox>Checkbox</Checkbox>
      <Checkbox>Checkbox</Checkbox>
    </>
  );

  const [{ parentElement: firstCheckbox }, { parentElement: secondCheckbox }] =
    screen.getAllByLabelText("Checkbox");

  firstCheckbox!.focus();
  expect(firstCheckbox).toHaveFocus();

  await user.tab();
  expect(secondCheckbox).toHaveFocus();

  await user.tab({ shift: true });
  expect(firstCheckbox).toHaveFocus();
});
