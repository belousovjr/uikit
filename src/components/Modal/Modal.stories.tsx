import type { Story, StoryDefault } from "@ladle/react";

import { Modal } from "./Modal";
import { Button } from "../Button/Button";
import { useState } from "react";
import { XIcon } from "lucide-react";
import { Textfield } from "../Textfield/Textfield";

export default {
  title: "Components/Modal",
} satisfies StoryDefault;

export const Regular: Story = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCustomOpen, setIsCustomOpen] = useState(false);
  const [isEmptyOpen, setIsEmptyOpen] = useState(false);
  const [isOverflowingOpen, setOverflowingIsOpen] = useState(false);
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Button
        onClick={() => {
          setIsCustomOpen(true);
        }}
      >
        Open Custom Modal
      </Button>
      <Button
        onClick={() => {
          setOverflowingIsOpen(true);
        }}
      >
        Open Overflowing Modal
      </Button>
      <Button
        onClick={() => {
          setIsEmptyOpen(true);
        }}
      >
        Open Empty Modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        className="w-[540px]"
      >
        <div className="grid gap-5 mb-10">
          <p className="text-xl font-bold">Modal Title</p>
          <p className="text-base">Modal content goes here</p>
        </div>
        <div className="flex justify-end gap-2">
          <Button
            onClick={() => {
              setIsOpen(false);
            }}
            variant="white"
            size="sm"
            className="border-none text-red-100"
          >
            Cancel
          </Button>
          <Button size="sm" variant="destructive">
            Delete
          </Button>
        </div>
      </Modal>
      <Modal
        isOpen={isCustomOpen}
        onClose={() => {
          setIsCustomOpen(false);
        }}
        className="bg-primary-100 text-white w-[540px]"
        closeIcon={null}
      >
        <p className="text-xl font-bold text-center">Modal Title</p>
        <p className="text-base text-center mb-5">Modal content goes here</p>
        <Textfield
          placeholder="Placeholder"
          className="w-full"
          label={<span className="text-white">Label</span>}
        />
      </Modal>
      <Modal
        isOpen={isOverflowingOpen}
        onClose={() => {
          setOverflowingIsOpen(false);
        }}
      >
        <p className="text-xl font-bold mb-5">Modal Title</p>
        {Array.from({ length: 50 }).map((_, i) => (
          <p key={i} className="text-base">
            Some Content Some Content Some Content Some Content Some Content
          </p>
        ))}
      </Modal>
      <Modal
        isOpen={isEmptyOpen}
        onClose={() => {
          setIsEmptyOpen(false);
        }}
      ></Modal>
    </div>
  );
};
