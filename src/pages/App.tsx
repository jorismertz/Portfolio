import "../sass/globals.sass";
import "../sass/main.sass";

import { ReactElement, useState } from "react";
import getUserLocale from "get-user-locale";

import Navbar from "../components/Navbar";

import { localeContent, Content, Locales } from "../content/content";

import Hero from "../components/content/Hero";
import Showcase from "../components/content/Showcase";
import AboutMe from "../components/content/Aboutme";
import MyWork from "../components/content/MyWork";

function App(): ReactElement {
  const [locale, setLocale] = useState<string>(getUserLocale());

  const [content, setContent] = useState(
    localeContent[(locale as string).toUpperCase() as keyof Locales]
  );

  function changeLocale(to: string) {
    setLocale(to);
    setContent(localeContent[(to as string).toUpperCase() as keyof Locales]);
  }

  return (
    <>
      <div className="sectionWrapper">
        <Hero
          content={{
            callToAction: content.calltoaction,
            navBar: content.navbar,
          }}
          locale={locale}
          changeLocale={changeLocale}
        />
        <Showcase />
        <AboutMe content={content.aboutme} />
        <MyWork />
      </div>
      <div className="backgroundwrapper">
        <img src="/bg.webp" alt="Background" className="background" />
        <div className="overlay"></div>
      </div>
    </>
  );
}

export default App;
