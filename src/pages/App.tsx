import "../sass/globals.sass";
import "../sass/main.sass";

import { ReactElement, useState } from "react";
import getUserLocale from "get-user-locale";

import Navbar from "../components/Navbar";

import { localeContent, Content } from "../content/content";

import Hero from "../components/content/Hero";
import Showcase from "../components/content/Showcase";
import AboutMe from "../components/content/Aboutme";
import MyWork from "../components/content/MyWork";

function App(): ReactElement {
  const [locale, setLocale] = useState<string>(getUserLocale());
  const [content, setContent] = useState(localeContent["NL"]);

  return (
    <>
      <Hero content={content.calltoaction} />
      <Showcase />
      <AboutMe />
      <MyWork />
      <div className="backgroundwrapper">
        <img src="/bg.webp" alt="Background" className="background" />
        <div className="overlay"></div>
      </div>
    </>
  );
}

export default App;
