import { createEffect, createSignal, type JSX } from "solid-js";

interface ScreenSizeType {
  x: number;
  y: number;
}

const initalValue: ScreenSizeType = { x: 0, y: 0 };

export const [currentScreenSize, setCurrentScreenSize] =
  createSignal<ScreenSizeType>(initalValue);

export const useScreenSize = () => {
  createEffect(() => {
    setCurrentScreenSize({ x: window.innerWidth, y: window.innerHeight });
    window.addEventListener("resize", (e: any) => {
      console.log(e.target);
      const { innerHeight: y, innerWidth: x } = e.target;
      setCurrentScreenSize({ x: innerWidth, y: innerHeight });
    });
  });
};
