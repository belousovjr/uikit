import { render, screen } from "@testing-library/react";
import { ColorPicker } from "./ColorPicker";

//Component is almost native
test("renders colorPicker", () => {
  render(<ColorPicker alt="color-picker" />);
  expect(screen.getByAltText("color-picker")).toBeInTheDocument();
});
