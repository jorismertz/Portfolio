import { useState } from "react";

interface Content {
  callToAction: string;
  navBar: string[];
}

interface Props {
  content: Content;
  locale: string;
  changeLocale: any;
}

const Hero = ({ content, locale, changeLocale }: Props) => {
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  return (
    <div className="wrapper1">
      <li className="navbar">
        <ul>
          <span id="services">
            <a
              href="https://instagram.com/jorisportfoliox/"
              target="_blank"
              rel="noreferrer"
            >
              {content.navBar[0].toUpperCase()}
            </a>
          </span>
        </ul>
        <ul>
          <span id="mwbutton">{content.navBar[1].toUpperCase()}</span>
        </ul>
        <ul>
          <span id="about">{content.navBar[2].toUpperCase()}</span>
        </ul>
      </li>
      <div className="container">
        <h1 className="title">Joris Mertz</h1>
        <i
          className="fa-solid fa-globe"
          style={{
            float: "right",
            position: "relative",
            top: "20px",
            cursor: "pointer",
          }}
          onClick={() => {
            setShowLanguageSelector(!showLanguageSelector);
          }}
        ></i>
        <div
          className="languageSelector"
          style={{
            opacity: showLanguageSelector ? "1" : "0",
          }}
        >
          <button onClick={() => changeLocale("NL")}>NL</button>
          <button onClick={() => changeLocale("EN")}>EN</button>
        </div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="par">
          <p className="vol">VOL 3.</p>
        </div>
        <h1 className="media_qoute">Simple and elegant design</h1>
        <div className="mobileChin"></div>
        <div className="showcase_wrapper">
          <h1 className="qoute">
            Simple <br /> &nbsp;&nbsp;and elegant <br />{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;design
          </h1>
          <p className="discover">- {content.callToAction.toUpperCase()}</p>
          <div className="showcase">
            <img alt="Srananthee ontwerp" src="/portfolio/srananthee/1.webp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
