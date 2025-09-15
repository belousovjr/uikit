import { render, screen } from "@testing-library/react";
import { Tooltip } from "./Tooltip";

test("renders tooltip child", () => {
  render(<Tooltip isOpen>Tooltip</Tooltip>);
  expect(screen.getByText("Tooltip")).toBeInTheDocument();
});

test("renders tooltip content", () => {
  render(
    <Tooltip isOpen content="Tooltip Content">
      Tooltip
    </Tooltip>
  );
  expect(screen.getByText("Tooltip Content")).toBeInTheDocument();
});
