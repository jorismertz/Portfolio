import { ReactElement, useRef, useState, MouseEvent, useEffect } from "react";

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

  const moveEvent = (e: MouseEventInit) => {
    const { movementX: x, movementY: y } = e;
    console.log(e);
    if (cursor.current) {
      cursor.current.style.left = x + "px";
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", moveEvent);

    return () => {
      document.removeEventListener("mousemove", moveEvent);
    };
  }, []);

  return (
    <div
      ref={cursor}
      className="cursor"
      style={{
        ["--color" as any]: options?.color ? options.color : "#000",
        ["--size" as any]: options?.size ? options.size + "rem" : "1rem",
        ["--growFactor" as any]: options?.growFactor ? options.growFactor : 2,
      }}
    ></div>
  );
};

export default Cursor;
