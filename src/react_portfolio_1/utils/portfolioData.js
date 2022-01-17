import { Facebook, LinkedIn, Twitter, GitHub } from "@material-ui/icons";

const personalData = {
  name: "Tarang Nair",
  title: "Software Engineer",
  birthday: "29th June 1998",
  contact: "9769712443",
  email: "tarangnair98@gmail.com",
};

const greetingData = {
  title : 'Hello 👋'
}

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
    "A Software developer with experience in building production grade applications with excellent research and debugging skills. I love to take up hard challenges, collaborate with people, automate things and solve real world problems.",
};

const skills = {
  data: [
    {
      title: "Mobile App Development",
      fileName: "MobileDevelopmentImg",
      skills: [
        "⚡ Experienced in developing scalable cross-platform mobile applications using Flutter.",

      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          iconifyIconId: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          iconifyIconId: "simple-icons:dart",
          style: {
            color: "#29B0EE",
          },
        },
        
      ]

    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing Web Applications using the React library"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          iconifyIconId: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          iconifyIconId: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          iconifyIconId: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        // {
        //   skillName: "PHP",
        //   iconifyIconId: "simple-icons:php",
        //   style: {
        //     color: "#7377AD",
        //   },
        // },
        {
          skillName: "ReactJS",
          iconifyIconId: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          iconifyIconId: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          iconifyIconId: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        // {
        //   skillName: "MongoDB",
        //   iconifyIconId: "simple-icons:mongodb",
        //   style: {
        //     color: "#439743",
        //   },
        // },
        // {
        //   skillName: "GraphQL",
        //   iconifyIconId: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        // {
        //   skillName: "Android",
        //   iconifyIconId: "simple-icons:android",
        //   style: {
        //     color: "#3DDC84",
        //   },
        // },
        // {
        //   skillName: "Java",
        //   iconifyIconId: "simple-icons:java",
        //   style: {
        //     color: "#f89820",
        //   },
        // },
        
        // {
        //   skillName: "Visual Basic",
        //   iconifyIconId: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        // {
        //   skillName: "MySQL",
        //   iconifyIconId: "simple-icons:mysql",
        //   style: {
        //     color: "#4479A1",
        //   },
        // },
        // {
        //   skillName: "jQuery",
        //   iconifyIconId: "simple-icons:jquery",
        //   style: {
        //     color: "#0865A6",
        //   },
        // },
        // {
        //   skillName: "Wordpress",
        //   iconifyIconId: "simple-icons:wordpress",
        //   style: {
        //     color: "#207297",
        //   },
        // },
        // {
        //   skillName: "Apache",
        //   iconifyIconId: "simple-icons:apache",
        //   style: {
        //     color: "#CA1A22",
        //   },
        // },
        // {
        //   skillName: "Git",
        //   iconifyIconId: "simple-icons:git",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        // {
        //   skillName: "C",
        //   iconifyIconId: "simple-icons:c",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        // {
        //   skillName: "C++",
        //   iconifyIconId: "simple-icons:cplusplus",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        // {
        //   skillName: "Python",
        //   iconifyIconId: "simple-icons:python",
        //   style: {
        //     color: "#3776AB",
        //   },
        // },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working with google cloud platform",
      ],
      softwareSkills: [
        // {
        //   skillName: "AWS",
        //   iconifyIconId: "simple-icons:amazonaws",
        //   style: {
        //     color: "#FF9900",
        //   },
        // },
        // {
        //   skillName: "Netlify",
        //   iconifyIconId: "simple-icons:netlify",
        //   style: {
        //     color: "#38AFBB",
        //   },
        // },
        // {
        //   skillName: "Heroku",
        //   iconifyIconId: "simple-icons:heroku",
        //   style: {
        //     color: "#6863A6",
        //   },
        // },
        {
          skillName: "Firebase",
          iconifyIconId: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        // {
        //   skillName: "PostgreSQL",
        //   iconifyIconId: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        // {
        //   skillName: "MongoDB",
        //   iconifyIconId: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        {
          skillName: "Docker",
          iconifyIconId: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          iconifyIconId: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

export { personalData, greetingData, mediaLinks, introduction , skills};
