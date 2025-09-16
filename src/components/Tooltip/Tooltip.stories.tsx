import type { Story, StoryDefault } from "@ladle/react";

import { Tooltip } from "./Tooltip";
import { Button } from "../Button/Button";

export default {
  title: "Components/Tooltip",
} satisfies StoryDefault;

export const Regular: Story = () => {
  return (
    <div className="relative min-h-dvh py-10">
      <div className="absolute flex flex-wrap gap-5 left-1/2 top-1/2 -translate-1/2">
        <Tooltip defaultPosition="left" content="Some Content">
          <Button variant="white">Left</Button>
        </Tooltip>
        <Tooltip defaultPosition="top" content="Some Content">
          <Button variant="white">Top</Button>
        </Tooltip>
        <Tooltip defaultPosition="right" content="Some Content">
          <Button variant="white">Right</Button>
        </Tooltip>
        <Tooltip defaultPosition="bottom" content="Some Content">
          <Button variant="white">Bottom</Button>
        </Tooltip>
        <Tooltip arrowDistance={9} content="Some Content">
          <Button
            variant="white"
            className="outline-1 outline-transparent outline-offset-1 group-data-[opened=true]/tooltip-activator:outline-primary-100"
          >
            With outline
          </Button>
        </Tooltip>
        <Tooltip
          className="bg-red-100"
          arrowDistance={13}
          content="Some Content"
        >
          <Button
            variant="white"
            className="outline-3 outline-transparent outline-offset-3 group-data-[opened=true]/tooltip-activator:outline-red-100"
          >
            Custom Colors
          </Button>
        </Tooltip>
        <Tooltip
          className="bg-black"
          defaultPosition="bottom"
          isOpen
          content="Some Content"
        >
          <Button>Always Opened</Button>
        </Tooltip>

        <div className="flex min-w-full justify-end mt-10">
          <Tooltip
            defaultPosition="left"
            content={
              <div className="whitespace-pre-line break-all">
                <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
              </div>
            }
          >
            <Button variant="white">Large</Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
