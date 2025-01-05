import Image1 from "../../../public/assets/img/portfolio/project-1.png";
import Image2 from "../../../public/assets/img/portfolio/project-2.png";
import Image3 from "../../../public/assets/img/portfolio/project-3.png";
import Image4 from "../../../public/assets/img/portfolio/project-4.png";
import Image5 from "../../../public/assets/img/portfolio/project-5.png";
import Image6 from "../../../public/assets/img/portfolio/project-6.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "Web Application",
    image: Image1,
    tag: ["website"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Online Shopping System",
        client: "Assignment",
        language: "PHP, HTML, CSS, JS",
        preview: "GitHub Link",
        link: "https://github.com/ashenbgy/Online-Shopping-System",
      },
    ],
  },
  {
    id: 2,
    type: "Android Application",
    image: Image2,
    tag: ["mobile"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Steganography Android App",
        client: "Assignment",
        language: "Java, Android Studio",
        preview: "GitHub Link",
        link: "https://github.com/ashenbgy/Steganography-Android-App",
      },
    ],
  },
  {
    id: 3,
    type: "Web Application",
    image: Image3,
    tag: ["website"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Spring Boot AWS Heroku Project",
        client: "Self Study",
        language: "Java, Spring Boot, AWS, Heroku",
        preview: "GitHub Link",
        link: "https://github.com/ashenbgy/spring-boot-aws-heroku",
      },
    ],
  },
  {
    id: 4,
    type: "Web Application",
    image: Image4,
    tag: ["website",],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Springboot Kafka Real World Project",
        client: "Self Study",
        language: "Java, Spring Boot, Kafka",
        preview: "GitHub Link",
        link: "https://github.com/ashenbgy/springboot-kafka-real-world-project",
      },
    ],
  },
  {
    id: 5,
    type: "Web Application",
    image: Image5,
    tag: ["website"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "E Channeling System",
        client: "Assignment",
        language: "Java, Spring Boot",
        preview: "GitHub Link",
        link: "https://github.com/ashenbgy/Echanneling-System",
      },
    ],
  },
  {
    id: 6,
    type: "Desktop Application",
    image: Image6,
    tag: ["desktop"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Employee Management System",
        client: "Group Assignment",
        language: " Java, Swing, MySQL",
        preview: "GitHub Link",
        link: "/",
      },
    ],
  },
];

export default PortfolioData;
