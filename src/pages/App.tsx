import "../sass/globals.sass";
import "../sass/main.sass";

import { ReactElement, useState, useRef } from "react";
import getUserLocale from "get-user-locale";

import { localeContent, Locales, SupportedLocale } from "../content/content";

import Hero from "../components/content/Hero";
import Showcase from "../components/content/Showcase";
import AboutMe from "../components/content/Aboutme";
import MyWork from "../components/content/MyWork";

const Spacer = ({ hide_md }: { hide_md?: boolean }) => {
  return (
    <>
      <div className="gap"></div>
      <div className={hide_md ? "hide-md" : ""}>
        <div className="line line_narrow"></div>
        <div className="line line_narrow"></div>
        <div className="gap"></div>
      </div>
    </>
  );
};

function App(): ReactElement {
  const [locale, setLocale] = useState<string>(getUserLocale());
  let UppercaseLocale = (locale as string).toUpperCase().split("-")[0];
  const isSupported = SupportedLocale(UppercaseLocale);

  if (!isSupported) UppercaseLocale = "EN";

  var [content, setContent] = useState(
    localeContent[UppercaseLocale as keyof Locales]
  );

  function changeLocale(to: string) {
    setLocale(to);
    setContent(localeContent[(to as string).toUpperCase() as keyof Locales]);
  }

  const refs = {
    aboutMe: useRef(),
    myWork: useRef(),
  };

  return (
    <>
      <main className="sectionWrapper">
        <Hero
          refs={{
            aboutme: refs.aboutMe,
            mywork: refs.myWork,
          }}
          content={{
            callToAction: content.calltoaction,
            navBar: content.navbar,
          }}
          locale={locale}
          changeLocale={changeLocale}
        />
        <Showcase />
        <Spacer hide_md={true} />
        <AboutMe scroll={refs.aboutMe} content={content.aboutme} />
        <Spacer />
        <MyWork
          refs={{
            mywork: refs.myWork,
          }}
          content={{
            mywork: content.mywork,
          }}
        />
      </main>
      <div className="backgroundwrapper">
        <img src="/bg.webp" alt="Background" className="background" />
        <div className="overlay"></div>
      </div>
    </>
  );
}

export default App;
