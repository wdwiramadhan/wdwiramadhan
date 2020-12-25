type Talk = {
  id : number,
  title : string,
  organizer :string,
  city : string,
  slides :string,
  date : string
}

const getAllTalks = ():Talk[] => {
  const talks:Talk[] = [
    {
      id : 1,
      title : "Beginner's Guide to Vue.js",
      organizer : "Dinus Open Source Community",
      city : "Semarang",
      slides : "https://slides.com/wdwiramadhan/git-fundamentals",
      date : "Dec 12, 2020"
    },
    {
      id : 2,
      title : "Fundamental Git",
      organizer : "HMDTI Udinus",
      city : "Semarang",
      slides : "https://slides.com/wdwiramadhan/beginner-s-guide-vue-js",
      date : "Dec 13, 2020"
    },
  ]
  return talks
}

export {
  getAllTalks,
}
