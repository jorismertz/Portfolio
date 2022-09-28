import { portfolioItem } from "./content/portfolioContent";
import React, { KeyboardEvent, useEffect, useRef, useState } from "react";

interface Props {
  content: portfolioItem;
  toggle: () => void;
}

const PortfolioViewer = ({ content, toggle }: Props) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") toggle();
  };
  const containerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (containerRef.current) containerRef.current.focus();
  }, []);
  const [currentSelected, setCurrentSelected] = useState<number>(0);
  return (
    <main
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="portfolio-viewer flex-center"
    >
      <i onClick={toggle} className="fa-solid fa-xmark"></i>
      <div className="portfolio-content">
        <section>
          <section className="flex-center">
            <img src={content.images[currentSelected]} alt="" />
          </section>
          <aside>
            {content.images.map((data, index) => (
              <div
                onClick={() => {
                  setCurrentSelected(index);
                }}
                className="portfolio-small"
              >
                <img src={data} alt="" />
              </div>
            ))}
          </aside>
        </section>
        <aside>
          <h1>{content.name}</h1>
          <p>{content.description}</p>
        </aside>
      </div>
    </main>
  );
};

export default PortfolioViewer;
