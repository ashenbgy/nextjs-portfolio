import React from "react";

const experienceContent = [
  {
    year: "   2022 Oct - Present",
    position: " SOFTWARE ENGINEER",
    companyName: "Affiniti Innovations",
    detail1: `• Worked with software development and testing team members to design and develop robust solutions to meet client requirements for functionality, scalability, and performance.`, 
    detail2: `• Actively engaged version release & deployment process and provided solutions to minimize each environment gaps.`, 
    detail3: `• Conducted code reviews, debugging, and troubleshooting to optimize application performance.`,
  },
  {
    year: "Mar 2021 - Sep 2022",
    position: " SOFTWARE DEVELOPER",
    companyName: "OpenArc Systems Management",
    detail1: `• Writing clean, maintainable and well-documented code to facilitate collaboration and future development effort.`, 
    detail2: `• Actively participated in bug fixing and troubleshooting activities.`, 
    detail3: `• Kept updated with the latest trends and advancements in Java development and related technologies.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.companyName}</span>
          </h5>
          <p className="open-sans-font">{val.detail1}</p>
          <p className="open-sans-font">{val.detail2}</p>
          <p className="open-sans-font">{val.detail3}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
