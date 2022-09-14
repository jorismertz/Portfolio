const Hero = ({ content }: { content: string }) => {
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
              INSTAGRAM
            </a>
          </span>
        </ul>
        <ul>
          <span id="mwbutton">MY WORK</span>
        </ul>
        <ul>
          <span id="about">ABOUT</span>
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
          }}
        ></i>
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
          <p className="discover">- {content.toUpperCase()}</p>
          <div className="showcase">
            <img alt="Srananthee ontwerp" src="/portfolio/srananthee/1.webp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
