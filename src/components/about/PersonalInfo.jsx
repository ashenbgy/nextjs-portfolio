import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Ashen", hasColor: "" },
  { meta: "last name", metaInfo: "Bhagya", hasColor: "" },
  { meta: "Address", metaInfo: "Gampaha", hasColor: "" },
  { meta: "Nationality", metaInfo: "Sri Lankan", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "langages", metaInfo: "Sinhala, English", hasColor: "" },
  { meta: "Email", metaInfo: <a href="mailto:ashenbhagye@gmail.com" className="text-decoration-none">ashenbhagye@gmail.com</a>, hasColor: "" },
  { meta: "LinkedIn", metaInfo: <a href="https://www.linkedin.com/in/ashen-bhagya" className="text-decoration-none">ashen-bhagya</a>, hasColor: "" },
  { meta: "HackerRank", metaInfo: <a href="https://www.hackerrank.com/profile/AlphaASH" className="text-decoration-none">AlphaASH</a>, hasColor: "" },
  { meta: "Medium", metaInfo: <a href="https://https://medium.com/@ashenbhagye" className="text-decoration-none">@ashenbhagye</a>, hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
