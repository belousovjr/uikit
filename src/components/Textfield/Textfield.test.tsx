import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Textfield } from "./Textfield";
import { createRef } from "react";

test("renders textfield", () => {
  render(<Textfield placeholder="Placeholder" />);
  expect(screen.getByPlaceholderText("Placeholder")).toBeInTheDocument();
});
test("renders input when textfield is not multiline", () => {
  render(<Textfield placeholder="Placeholder" />);
  const textfield = screen.getByPlaceholderText("Placeholder");
  expect(textfield.tagName).toBe("INPUT");
});
test("renders textarea when textfield is multiline", () => {
  render(<Textfield placeholder="Placeholder" multiline />);
  const textfield = screen.getByPlaceholderText("Placeholder");
  expect(textfield.tagName).toBe("TEXTAREA");
});

test("changes value", async () => {
  render(<Textfield placeholder="Placeholder" defaultValue="DEFAULT" />);
  const textfield = screen.getByPlaceholderText(
    "Placeholder"
  ) as HTMLInputElement;
  await userEvent.type(textfield, " AND TEST");
  expect(textfield.value).toBe("DEFAULT AND TEST");
});

test("no changes value when textfield is disabled", async () => {
  render(
    <Textfield placeholder="Placeholder" defaultValue="DEFAULT" disabled />
  );
  const textfield = screen.getByPlaceholderText(
    "Placeholder"
  ) as HTMLInputElement;
  await userEvent.type(textfield, " AND TEST");
  expect(textfield.value).toBe("DEFAULT");
});

test("forwards ref to textfield", () => {
  const ref = createRef<HTMLInputElement>();
  render(<Textfield placeholder="Placeholder" ref={ref} />);
  const textfield = screen.getByPlaceholderText(
    "Placeholder"
  ) as HTMLInputElement;
  expect(ref.current).toBe(textfield);
});

test("renders label of textfield", () => {
  render(<Textfield size="sm" placeholder="Placeholder" label="Test Label" />);
  expect(screen.getByText("Test Label")).toBeInTheDocument();
});
