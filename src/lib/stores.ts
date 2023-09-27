import { createSignal } from "solid-js";
import type { MousePos } from "../components/wordSoup/MousePosition";

export const mousePosition = createSignal<MousePos>({ x: 0, y: 0 });
