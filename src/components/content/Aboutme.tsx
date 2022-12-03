import { useState, useLayoutEffect } from "react";
import { AboutMe } from "../../content/content";
import { useInView } from "react-intersection-observer";

const AboutPage = ({ content, scroll }: { content: AboutMe; scroll: any }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const [show, doShow] = useState<boolean>(false);
  useLayoutEffect(() => {
    if (show) return;
    if (inView) doShow(true);
  }, [inView, show]);
  return (
    <div
      ref={ref}
      id="aboutme_scroll"
      className="wrapper3"
      style={{
        opacity: show ? "1" : "0",
        transform: show ? "translateY(0)" : "translateY(100px)",
        transition: "all 2s cubic-bezier(0.17,0.84,0.44,1)",
      }}
    >
      <h1 className="aboutme" ref={scroll}>
        {content.title}
      </h1>
      <div className="gap"></div>
      <div className="content">
        <div className="content_block">
          <img src="./foto.jpg" alt="" />
        </div>
        <div id="abt_text" className="content_block">
          {/* <h3>{content.heading}</h3> */}
          <p
            style={{
              whiteSpace: "pre-wrap",
            }}
          >
            {content.content}
          </p>
        </div>
        <div className="clear"></div>
      </div>
    </div>
  );
};

export default AboutPage;
