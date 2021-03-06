// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Kamran",
  middleName: "",
  lastName: "Jameel",
  message: " Coding Enthusiast | Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/jameelk809/",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/kamran.jameel.520",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/kamranjameel54/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/kamranjameel/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/jameelk809/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/kamran.jpg"),
  imageSize: 375,
  message:
    "I’m Kamran Jameel. I'm a Computer Science Engineer undergraduate from Dr. BC Roy Engineering College, Durgapur, WB. I'm passionate about being an Engineer, who solves Challenging problems, using all the possible technologies such as programming, machine learning, statistical analysis, etc, and other practical tools.",
  resume: "https://drive.google.com/file/d/1ivQGlYEGTrVMK9fp-nKQ_N-mMFbaiTSU/view",
};

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "jameelk809",
  reposLength: 0,
  specificRepos: ["Travelster", "NewsMonkey", "TextUtils", "Simple-LogIn-SignUp"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/kamran.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/kamran.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "C/C++", value: 80 },
    { name: "Java", value: 65 },
    { name: "HTML/CSS", value: 75 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "Django", value: 70 },
    { name: "React", value: 65 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "jameelk809@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: []
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
