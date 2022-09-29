import { useState, useLayoutEffect } from "react";
import { portfolioContent, portfolioItem } from "./portfolioContent";
import PortfolioViewer from "../PortfolioViewer";
import { useInView } from "react-intersection-observer";

interface Props {
  content: portfolioItem;
  key: number;
}

const PortfolioItem = ({ content, key }: Props) => {
  const [viewerState, setViewerState] = useState<boolean>(false);
  const toggleViewer = (): void => {
    setViewerState(!viewerState);
  };
  return (
    <>
      {viewerState && (
        <PortfolioViewer toggle={toggleViewer} content={content} />
      )}
      <div className="item" onClick={toggleViewer}>
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
  const { ref, inView } = useInView({
    threshold: 0.0,
    rootMargin: "100px",
  });
  const [show, doShow] = useState<boolean>(false);
  useLayoutEffect(() => {
    if (show) return;
    if (inView) doShow(true);
  }, [inView, show]);
  return (
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
            <PortfolioItem content={data} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWork;
