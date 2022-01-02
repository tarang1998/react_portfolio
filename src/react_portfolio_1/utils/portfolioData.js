import { Facebook, LinkedIn, Twitter, GitHub } from "@material-ui/icons";

const personalData = {
  name: "Tarang Nair",
  title: "Software Engineer",
  birthday: "29th June 1998",
  contact: "9769712443",
  email: "tarangnair98@gmail.com",
};

const mediaLinks = {
  socials: {
    Facebook: {
      link: "https://www.facebook.com/tarangnair",
      text: "tarangnair",
      icon: <Facebook />,
    },
    Twitter: {
      link: "https://twitter.com/tarang90564113",
      text: "tarang",
      icon: <Twitter />,
    },
    Linkedin: {
      link: "https://www.linkedin.com/in/tarang-nair-752aa8179/",
      text: "tarang",
      icon: <LinkedIn />,
    },
    Github: {
      link: "https://github.com/tarang1998",
      text: "tarang1998",
      icon: <GitHub />,
    },
  },
};

const introduction = {
  aboutMe:
    "A Software developer with experience in building scalable, testable production grade applications with excellent research and debugging skills and the ability to quickly learn and adapt with the ever changing technology . I love to take up hard challenges, collaborate with people, automate things and solve real world problems.",
};

export { personalData, mediaLinks, introduction };
