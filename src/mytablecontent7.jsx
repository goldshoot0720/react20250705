export const mytablecontent7 = [
  {
    column1: "Quokka",
    column2: "642",
    column3: "Windows",
    column4: "尚未購買",
    title: "Quokka",
    alt: "Quokka",
    link: "https://quokkajs.com",
  },
  {
    column1: "EaseUS Video Downloader",
    column2: "1260",
    column3: "Windows",
    column4: "",
    title: "EaseUS Video Downloader",
    alt: "EaseUS Video Downloader",
    link: "https://tw.easeus.com/video-downloader/",
  },
  {
    column1: "",
    column2: "",
    column3: "",
    column4: "",
    title: "",
    alt: "",
    link: "",
  },
];

mytablecontent7.sort((a, b) => {
  return b.column2 - a.column2;
});
