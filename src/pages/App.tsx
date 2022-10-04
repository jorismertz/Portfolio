import "../sass/globals.sass";
import "../sass/main.sass";

import { ReactElement, useState, useRef, useEffect } from "react";
import getUserLocale from "get-user-locale";
import { Gradient } from "whatamesh";

import { localeContent, Locales, SupportedLocale } from "../content/content";

import Navbar from "../components/Navbar";
import Hero from "../components/content/Hero";
import Showcase from "../components/content/Showcase";
import AboutMe from "../components/content/Aboutme";
import MyWork from "../components/content/MyWork";

import Cursor from "../components/Cursor";

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
  // Top level states
  const [locale, setLocale] = useState<string>(getUserLocale());
  const [currentShowcase, setCurrentShowcase] = useState<number>(0);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);

  // const gradient = new Gradient();

  // This is always a locale name like "EN", it removes any other country information
  let UppercaseLocale = (locale as string).toUpperCase().split("-")[0];
  const isSupported = SupportedLocale(UppercaseLocale);

  if (!isSupported) UppercaseLocale = "EN";

  var [content, setContent] = useState(
    localeContent[UppercaseLocale as keyof Locales]
  );

  function changeLocale(to: string): void {
    setLocale(to);
    setContent(localeContent[(to as string).toUpperCase() as keyof Locales]);
  }

  const refs = {
    aboutMe: useRef<HTMLHeadingElement>(null),
    myWork: useRef<HTMLHeadingElement>(null),
    showcaseRef: useRef<number>(0),
  };

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <>
      <Navbar
        changeLocale={changeLocale}
        content={{
          navbar: content.navbar,
        }}
        langSelector={[showLanguageSelector, setShowLanguageSelector]}
        scrollToRefs={{
          aboutme: refs.aboutMe,
          mywork: refs.myWork,
        }}
      />
      {/* <Cursor /> */}
      <main className="sectionWrapper">
        <Hero
          refs={{
            aboutme: refs.aboutMe,
            mywork: refs.myWork,
            showcase: refs.showcaseRef,
          }}
          setShowcase={setCurrentShowcase}
          content={{
            callToAction: content.calltoaction,
            navBar: content.navbar,
          }}
        />
        <Showcase currentShowcase={currentShowcase} />
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
        {/* <img src="/bg.webp" alt="Background" className="background" /> */}
        <canvas id="gradient-canvas" data-transition-in></canvas>
        <div className="overlay"></div>
      </div>
    </>
  );
}

export default App;
