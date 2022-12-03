export interface AboutMe {
  title: string;
  heading: string;
  content: string;
}

export interface Content {
  motto: string;
  navbar: string[];
  calltoaction: string;
  aboutme: AboutMe;
  mywork: string;
}

export const SupportedLocale = (locale: string) => {
  const supported = ["NL", "EN"];
  if (supported.indexOf(locale) !== -1) return true;
  else return false;
};

const getAge = (birthdate: string): number => {
  // Only reason this is accurate is because i was born on 01/01/2004
  // Shouldn't use this for other purposes
  const temp = birthdate.split(" ");
  const date = new Date();
  if (temp.length < 3)
    throw new Error(
      "Birthdate string should should have 2 spaces seperating date"
    );
  return date.getFullYear() - parseInt(temp[0]);
};

const NL: Content = {
  motto: "Simple and elegant design",
  navbar: ["Github", "Mijn werk", "Over"],
  calltoaction: "Ontdek",
  aboutme: {
    title: "Over mij",
    heading: getAge("2004 01 01") + " jaar oud. Noord-Brabant, NL",
    content: `Ervaring met visual design & full stack web development. Ik ben een autodidact en probeer in mijn vrije tijd veel nieuwe technieken te leren waarmee ik mijn creativiteit kan uiten. Dit doe ik in allerlei vormen zoals website’s, grafisch ontwerp, videobewerking en fotografie\n
Ik heb meerdere jaren ervaring met verschillende Adobe software zoals Photoshop, Illustrator, After Effects en XD.\n
Ik beheers meerdere programmeertalen, maar ik ben gespecialiseerd in NodeJS en gebruik voornamelijk React voor front-end
    `,
  },
  mywork: "Mijn werk",
};

const EN: Content = {
  motto: "Simple and elegant design",
  navbar: ["Github", "My work", "About"],
  calltoaction: "Discover",
  aboutme: {
    title: "About me",
    heading: getAge("2004 01 01") + " years old. Noord-Brabant, NL",
    content: `Hi there! My name is Joris and I am a 18 year old junior full-stack web developer with a passion for digital design.\n
I have a strong foundation in both front-end and back-end development, which allows me to create stunning, user-friendly websites that are both functional and visually appealing.\n
In addition to web development, I am also skilled in digital design, using tools like Adobe Creative Suite to create eye-catching graphics, logos, and other design elements that enhance the overall user experience.\n
I have a keen eye for detail and a commitment to staying up-to-date with the latest web development and design trends.\n
If you're looking to create a new website from scratch, revamp an existing one, or simply need help with design and development, I have the skills and expertise to help you achieve your goals.`,
  },
  mywork: "My work",
};

export interface Locales {
  NL: string;
  EN: string;
}

export const localeContent = {
  NL: NL,
  EN: EN,
};
