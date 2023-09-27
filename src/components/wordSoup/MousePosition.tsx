import { type JSX } from "solid-js";
import { mousePosition } from "../../lib/stores";

interface Props {
  children: JSX.Element;
}

export interface MousePos {
  x: number;
  y: number;
}

export const MousePosition = ({ children }: Props) => {
  function cursorEventHandler(event: MouseEvent) {
    const [_, setCurrentMousePosition] = mousePosition;
    setCurrentMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  }

  return (
    <div class="h-full" onmousemove={cursorEventHandler}>
      {children}
    </div>
  );
};
