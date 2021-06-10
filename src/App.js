import React from "react";
import MainContent from "./components/MainContent";
import GlobalStyle from "./styles/global";
import CardContainer from "./components/CardContainer";

import Content from "./styles/content";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Content>
        <MainContent />
        <CardContainer />
      </Content>
    </>
  );
};

export default App;
