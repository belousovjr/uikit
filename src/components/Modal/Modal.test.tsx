import { fireEvent, render, screen } from "@testing-library/react";
import { Modal } from "./Modal";
import { useState } from "react";
import { TrashIcon } from "lucide-react";

function ModalTestWrapper() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      Modal
    </Modal>
  );
}

test("renders opened modal", () => {
  render(<Modal isOpen>Modal</Modal>);
  expect(screen.getByText("Modal")).toBeInTheDocument();
});

test("no renders closed modal", () => {
  render(<Modal isOpen={false}>Modal</Modal>);
  const element = screen.queryByText("Modal");
  expect(element).toBeNull();
});

test("calls onClose callback when close button is clicked", () => {
  const handleClose = vi.fn();
  render(
    <Modal isOpen onClose={handleClose}>
      Click
    </Modal>
  );
  const closeButtonElement = screen.getByTitle("Close Modal");
  fireEvent.click(closeButtonElement);
  expect(handleClose).toHaveBeenCalledTimes(1);
});

test("hides modal after close", async () => {
  render(<ModalTestWrapper />);
  const closeButtonElement = screen.getByTitle("Close Modal");
  fireEvent.click(closeButtonElement);
  await new Promise((resolve) => setTimeout(resolve, 200 * 1.5));

  const element = screen.queryByText("Modal");
  expect(element).toBeNull();
});

test("renders custom close icon", () => {
  const handleClose = vi.fn();
  render(
    <Modal
      isOpen
      onClose={handleClose}
      closeIcon={<TrashIcon className="text-black" />}
    >
      Click
    </Modal>
  );
  const closeButtonElement = screen.getByTitle("Close Modal");
  expect(
    closeButtonElement.children[0].classList.contains("text-black")
  ).toBeTruthy();
});
