// import type { Content } from "../content/content";
import { RefObject } from "react";

interface LangProps {
  langSelector: any[];
  changeLocale: (to: string) => void;
}

const Lang = ({ langSelector, changeLocale }: LangProps) => {
  const [showLanguageSelector, setShowLanguageSelector] = langSelector;
  return (
    <div>
      <i
        className="fa-solid fa-globe"
        style={{
          position: "relative",
          cursor: "pointer",
          float: "right",
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
        <button className="canvas" onClick={() => changeLocale("NL")}>
          NL
        </button>
        <button className="canvas" onClick={() => changeLocale("EN")}>
          EN
        </button>
      </div>
    </div>
  );
};

interface Props {
  content: {
    navbar: string[];
  };
  langSelector: any[];
  changeLocale: (to: string) => void;
  scrollToRefs: {
    aboutme: RefObject<HTMLHeadingElement>;
    mywork: RefObject<HTMLHeadingElement>;
  };
}

const Navbar = ({
  content,
  langSelector,
  changeLocale,
  scrollToRefs,
}: Props) => {
  return (
    <header className="header">
      <h1>Joris Mertz</h1>
      <div className="line"></div>
      <div className="line"></div>
      <nav>
        <h4>VOL 4.</h4>
        <ul className="navbar-links canvas">
          <li>
            <span id="services">
              <a
                href="https://github.com/jorismertz"
                target="_blank"
                rel="noreferrer"
              >
                {content.navbar[0].toUpperCase()}
              </a>
            </span>
          </li>
          <li
            onClick={() => {
              if (scrollToRefs.mywork.current !== null)
                scrollToRefs.mywork.current.scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            <span id="mwbutton">{content.navbar[1].toUpperCase()}</span>
          </li>
          <li
            onClick={() => {
              if (scrollToRefs.aboutme.current !== null)
                scrollToRefs.aboutme.current.scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            <span id="about">{content.navbar[2].toUpperCase()}</span>
          </li>
        </ul>
        <Lang langSelector={langSelector} changeLocale={changeLocale} />
      </nav>
    </header>
  );
};

export default Navbar;
