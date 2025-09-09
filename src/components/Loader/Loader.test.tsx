import { render } from "@testing-library/react";
import { Loader } from "./Loader";

test("renders loader", () => {
  const { container } = render(<Loader />);
  expect(container.querySelector("svg")).toBeInTheDocument();
});
