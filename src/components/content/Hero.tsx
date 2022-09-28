import { useEffect, useState, useRef } from "react";
import { portfolioContent } from "./portfolioContent";

interface Content {
  callToAction: string;
  navBar: string[];
}

interface Props {
  content: Content;
  locale: string;
  changeLocale: any;
  refs: {
    aboutme: any;
    mywork: any;
    showcase: any;
  };
  setShowcase: any;
}

const TextSpacer = ({ length }: { length: number }) => {
  let elements = [];
  for (let i = 0; i < length; i++) {
    elements.push(<>&nbsp;</>);
  }
  return <>{elements}</>;
};

const Hero = ({ content, locale, changeLocale, refs, setShowcase }: Props) => {
  const [currentShowcase, setCurrentShowcase] = useState<number>(0);
  const showcaseInterval = 2e3;

  const updateShowcases = (val: number): void => {
    const length = portfolioContent.length;
    if (val + 1 >= length) {
      setShowcase(0);
      setCurrentShowcase(0);
    } else {
      setCurrentShowcase(val + 1);
      setShowcase(val + 1);
    }
  };

  useEffect(() => {
    refs.showcase.current = currentShowcase;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      updateShowcases(refs.showcase.current);
    }, showcaseInterval);
    return () => {
      clearTimeout(interval);
    };
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div
          className="show-md"
          style={{
            display: "none",
          }}
        >
          {/* <div className="gap"></div> */}
          <h2 className="mobile-qoute show-md" style={{ display: "none" }}>
            Development and creative design
          </h2>
          <button
            className="button canvas"
            style={{
              marginTop: "20px",
            }}
            onClick={() => {
              refs.aboutme.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Read more
          </button>
        </div>
        <div className="mobileChin"></div>
        <div className="showcase_wrapper">
          <h1 className="qoute hide-sm">
            development
            <br /> <TextSpacer length={4} /> and creative <br />
            <TextSpacer length={20} />
            design
          </h1>
          <p
            onClick={() => {
              refs.mywork.current.scrollIntoView({ behavior: "smooth" });
            }}
            className="discover hide-sm canvas"
          >
            <span className="sora">-</span> {content.callToAction.toUpperCase()}
          </p>
          <div className="showcase hide-sm">
            <img alt="" src={portfolioContent[currentShowcase].images[0]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
