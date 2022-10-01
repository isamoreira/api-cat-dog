import React from "react";
import Router from "./Routes/Route";
import * as S from "./Components/Style/Styles";
const App = () => {
  return (
    <div>
      <S.GlobalStyle />
      <Router />
    </div>
  );
};

export default App;
