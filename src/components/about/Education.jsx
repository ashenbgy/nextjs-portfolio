import React from "react";

const educationContent = [
  {
    year: "02/2023 - 02/2024",
    degree: "Bachelor of Science (Hons) Degree in Computing",
    institute: "Wrexham Glyndwr University",
    details: `  Major in Computer Science`,
  },
  {
    year: "05/2018 - 05/2020",
    degree: "Higher National Diploma in Information Technology (HNDIT)",
    institute: "Sri Lanka Institute of Advanced Technological Education (SLIATE)",
    details: `Major in Information Technology`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-graduation-cap"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
