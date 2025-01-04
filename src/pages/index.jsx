import React from "react";
import Wrapper from "../layout/wrapper";
import HomeDark from "./home-dark";

const MainRoot = () => {
  return (
    <Wrapper>
      <HomeDark initialTab="Home" />
    </Wrapper>
  );
};

export default MainRoot;
