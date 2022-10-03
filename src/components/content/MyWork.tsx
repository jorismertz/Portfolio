import { useState, useLayoutEffect } from "react";
import { portfolioContent, portfolioItem } from "./portfolioContent";
import PortfolioViewer from "../PortfolioViewer";
import { useInView } from "react-intersection-observer";

interface Props {
  content: portfolioItem;
  onclick: () => void;
}

const PortfolioItem = ({ content, onclick }: Props) => {
  return (
    <>
      <div className="item" onClick={onclick}>
        <img src={content.images[0]} alt={content.name} className="bgImg" />
        <section className="hover flex-center">
          <h2 className="white sora">{content.name}</h2>
        </section>
      </div>
    </>
  );
};

//const AboutPage = ({ content }: { content: AboutMe }) => {

interface Content {
  content: { mywork: string };
  refs: { mywork: any };
}

const MyWork = ({ content, refs }: Content) => {
  const [currentItem, setCurrentItem] = useState<portfolioItem | null>(null);
  const [show, doShow] = useState<boolean>(false);

  const { ref, inView } = useInView({
    threshold: 0.0,
    rootMargin: "100px",
  });

  const closeViewer = (): void => {
    setCurrentItem(null);
  };

  useLayoutEffect(() => {
    if (show) return;
    if (inView) doShow(true);
  }, [inView, show]);
  return (
    <>
      {currentItem !== null && (
        <PortfolioViewer toggle={closeViewer} content={currentItem} />
      )}
      <section
        ref={ref}
        style={{
          opacity: show ? "1" : "0",
          transform: show ? "translateY(0)" : "translateY(100px)",
          transition: "all 2s cubic-bezier(0.17,0.84,0.44,1)",
        }}
      >
        <h1 className="text-center" ref={refs.mywork}>
          {content.mywork}
        </h1>
        <div className="gap"></div>
        <div className="flex-center-x">
          <div className="portfolio">
            {portfolioContent.map((data, key) => (
              <PortfolioItem
                onclick={() => setCurrentItem(data)}
                content={data}
                key={key}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MyWork;
