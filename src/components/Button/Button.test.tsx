import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { createRef } from "react";

test("renders button", () => {
  render(<Button>Click</Button>);
  expect(screen.getByText("Click")).toBeInTheDocument();
});

test("calls onClick callback when button is clicked", () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Click</Button>);
  const buttonElement = screen.getByText("Click");
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("no calls onClick callback when disabled button is clicked", () => {
  const handleClick = vi.fn();
  render(
    <Button onClick={handleClick} disabled>
      Click
    </Button>
  );
  const buttonElement = screen.getByText("Click");
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(0);
});

test("no calls onClick callback when loading button is clicked", () => {
  const handleClick = vi.fn();
  render(
    <Button onClick={handleClick} loading>
      Click
    </Button>
  );
  const buttonElement = screen.getByText("Click");
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(0);
});

test("forwards ref to button", () => {
  const ref = createRef<HTMLButtonElement>();
  render(<Button ref={ref}>Click</Button>);
  const buttonElement = screen.getByText("Click");
  expect(ref.current).toBe(buttonElement);
});

test("button with size sm has tw class min-h-9", () => {
  render(<Button size="sm">Click</Button>);
  const buttonElement = screen.getByText("Click");
  expect(buttonElement.classList.contains("min-h-9")).toBeTruthy();
});
