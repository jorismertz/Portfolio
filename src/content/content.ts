interface AboutMe {
  title: string;
  heading: string;
  content: string;
}

export type Content = {
  motto: string;
  navbar: string[];
  calltoaction: string;
  aboutme: AboutMe;
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
    content: "Ervaring met visueel design zoals UI, Illustrations, Logo design. Front & Back end webdevelopment ervaring met PHP en NodeJS Software ervaring met Photoshop, Illustrator, After Effects, InDesign, XD Momenteel volg ik de studie Crossmedia vormgeving op het SintLucas Eindhoven In mijn vrije tijd leer ik graag nieuwe technieken of programma's waarmee ik mijn creativiteit kan uiten. Dit doe ik in verschillende vormen zoals website's, grafische ontwerpen, videobewerking en fotografie."
  }
}

const EN:Content = {
  motto: "Simple and elegant design",
  navbar: ["Instagram", "My work", "About"],
  calltoaction: "Discover",
  aboutme: {
    title: "About me",
    heading: getAge("2004 01 01") + " years old. Noord-Brabant, NL",
    content: "Ervaring met visueel design zoals UI, Illustrations, Logo design. Front & Back end webdevelopment ervaring met PHP en NodeJS Software ervaring met Photoshop, Illustrator, After Effects, InDesign, XD Momenteel volg ik de studie Crossmedia vormgeving op het SintLucas Eindhoven In mijn vrije tijd leer ik graag nieuwe technieken of programma's waarmee ik mijn creativiteit kan uiten. Dit doe ik in verschillende vormen zoals website's, grafische ontwerpen, videobewerking en fotografie."
  }
}

export const localeContent = {
  'NL': NL,
  'EN': EN
}