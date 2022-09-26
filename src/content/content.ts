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
  const supported = ['NL', 'EN'];
  if (supported.indexOf(locale) !== -1) return true
  else return false
}

const getAge = (birthdate: string): number => {
  // Only reason this is accurate is because i was born on 01/01/2004
  // Shouldn't use this for other purposes
  const temp = birthdate.split(' ');
  const date = new Date();
  if (temp.length < 3) throw new Error('Birthdate string should should have 2 spaces seperating date')
  return date.getFullYear() - parseInt(temp[0])
}

const NL:Content = {
  motto: "Simple and elegant design",
  navbar: ["Instagram", "Mijn werk", "Over"],
  calltoaction: "Ontdek",
  aboutme: {
    title: "Over mij",
    heading: getAge("2004 01 01") + " jaar oud. Noord-Brabant, NL",
    content: `Ervaring met visual design & full stack web development. Ik ben een autodidact en probeer in mijn vrije tijd veel nieuwe technieken te leren waarmee ik mijn creativiteit kan uiten. Dit doe ik in allerlei vormen zoals website’s, grafisch ontwerp, videobewerking en fotografie\n
Ik heb meerdere jaren ervaring met verschillende Adobe software zoals Photoshop, Illustrator, After Effects en XD.\n
Ik beheers meerdere programmeertalen, maar ik ben gespecialiseerd in NodeJS en gebruik voornamelijk React voor front-end
    `
  },
  mywork: "Mijn werk"
}

const EN:Content = {
  motto: "Simple and elegant design",
  navbar: ["Instagram", "My work", "About"],
  calltoaction: "Discover",
  aboutme: {
    title: "About me",
    heading: getAge("2004 01 01") + " years old. Noord-Brabant, NL",
    content: `Experience with visual design & full stack web development. I'm self taught and I try to learn many new techniques in my free time with which I can express my creativity. I do this in all sorts of forms such as website’s, graphic design, video-editing and photography\n
I have multiple years of experience with various Adobe software such as Photoshop, Illustrator, After Effects and XD.\n
I know multiple programming languages but I specialize in NodeJS and mainly use React for front-end`
  },
  mywork: "My work"
}

export interface Locales {
  'NL': string;
  'EN': string;
}

export const localeContent = {
  'NL': NL,
  'EN': EN
}