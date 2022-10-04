import { ReactElement, useRef, useState, useEffect } from "react";

interface Options {
  color?: string;
  size?: number;
  growFactor?: number;
}

interface Props {
  options?: Options;
}

const Cursor = ({ options }: Props): ReactElement => {
  const cursor = useRef<HTMLDivElement | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const moveEvent = (e: MouseEventInit) => {
    const { screenX: x, screenY: y } = e;
    //console.log(e);
    if (cursor.current && x && y) {
      setCursorPosition({ x: x - 5, y: y - 145 });
      cursor.current.style.transform = `translate(${x - 5}px, ${y - 145}px)`;
    }
  };

  const mouseEnter = (e: MouseEventInit) => {
    console.log("entered");
  };

  useEffect(() => {
    document.addEventListener("mousemove", moveEvent);
    document.addEventListener("mouseenter", mouseEnter);

    return () => {
      document.removeEventListener("mousemove", moveEvent);
    };
  }, []);

  return (
    <div
      ref={cursor}
      className="cursor"
      style={{
        ["--x" as any]: cursorPosition.x,
        ["--y" as any]: cursorPosition.y,
        ["--color" as any]: options?.color ? options.color : "gray",
        ["--size" as any]: options?.size ? options.size + "rem" : ".5rem",
        ["--growFactor" as any]: options?.growFactor ? options.growFactor : 2,
      }}
    >
      <div className="dot"></div>
    </div>
  );
};

export default Cursor;
