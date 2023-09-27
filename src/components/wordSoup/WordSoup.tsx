import { createEffect, createSignal } from "solid-js";
import {
  generateWordList,
  generateColoredPositions,
  generateShifts,
} from "../../lib/generateWordSoup";

import { mousePosition } from "../../lib/stores";
import { currentScreenSize, useScreenSize } from "./ScreenSize";

const DisplayedWords = [
  "creative",
  "design",
  "development",
  "branding",
  "websites",
];

interface WordProps {
  content: string;
  highlighted: boolean;
  size: number;
}

const Word = ({ content, highlighted, size }: WordProps) => {
  return (
    <p
      style={{
        "font-size": `min(${size}vw, ${size + 10}vh)`,
      }}
      class={`${
        highlighted ? "text-highlightMed" : "text-highlightMed/40"
      } font-GreatSailor`}
    >
      {content}
    </p>
  );
};

interface WordSoupProps {
  rows: number;
  size: number;
}

export default function WordSoup(
  { rows, size }: WordSoupProps = { rows: 6, size: 10 }
) {
  const words = generateWordList(rows, DisplayedWords);
  const positions = generateColoredPositions(rows, DisplayedWords.length);
  const shifts = generateShifts(rows);

  let [xShift, setXShift] = createSignal<number>(0);
  let [yShift, setYShift] = createSignal<number>(0);

  const [currentMousePosition] = mousePosition;
  useScreenSize();

  createEffect(() => {
    setXShift(
      ((currentMousePosition().x / currentScreenSize().x) * 100 - 50) / 8
    );
    setYShift(
      ((currentMousePosition().y / currentScreenSize().y) * 100 - 50) / 8
    );
  });

  return (
    <section
      style={{
        transform: `skewY(${yShift()}deg)`,
      }}
      class="relative"
    >
      {words.map((row, index) => (
        <section
          class={`flex flex-row flex-nowrap w-full gap-6 relative`}
          style={{
            "line-height": size + 2 + "vh",
            transform:
              index % 2 == 0
                ? `translateX(-${shifts[index] - xShift()}%)`
                : `translateX(-${shifts[index] - xShift() * -1}%)`,
          }}
        >
          {row.map((word, i) => (
            <Word
              highlighted={positions[index][i]}
              size={size}
              content={word}
            />
          ))}
        </section>
      ))}
    </section>
  );
}
