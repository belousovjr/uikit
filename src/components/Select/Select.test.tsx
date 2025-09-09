import { render, screen } from "@testing-library/react";
import { Select } from "./Select";

//Component is almost native
test("renders select", () => {
  render(<Select label="Select" />);
  expect(screen.getByText("Select")).toBeInTheDocument();
});
