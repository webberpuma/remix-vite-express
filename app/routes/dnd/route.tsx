import { DndContext } from "@dnd-kit/core";
import React, { useState } from "react";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
  restrictToParentElement,
} from "@dnd-kit/modifiers";
import SvgTemplate from "../../components/SvgTemplate";

export default function Index() {
  const [isDropped, setIsDropped] = useState(false);

  return (
    <DndContext onDragEnd={handleDragEnd} modifiers={[restrictToParentElement]}>
      <div className="flex items-center justify-center m-10">
        <Droppable>
          <div className="relative size-96 flex items-center justify-center border-2 border-zinc-200">
            <div className="absolute bg-indigo-300 top-12 left-12 size-80 flex items-center justify-center">
              image
            </div>
            <Draggable>
              <div className="size-full flex items-center justify-center border-zinc-200 border-8">
                <SvgTemplate />
              </div>
            </Draggable>
          </div>
        </Droppable>
      </div>
    </DndContext>
  );

  function handleDragEnd(event: any) {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  }
}
