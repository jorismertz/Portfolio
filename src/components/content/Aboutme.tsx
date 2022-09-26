import { AboutMe } from "../../content/content";

const AboutPage = ({ content }: { content: AboutMe }) => {
  return (
    <div id="aboutme_scroll" className="wrapper3">
      <h1 className="aboutme">{content.title}</h1>
      <div className="gap"></div>
      <div className="content">
        <div className="content_block">
          <img src="./foto_joris.webp" alt="" />
        </div>
        <div id="abt_text" className="content_block">
          <h3>{content.heading}</h3>
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
