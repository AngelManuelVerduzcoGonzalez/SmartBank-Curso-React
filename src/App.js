import React, {useState} from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./UI/temas";
import { BtnTema } from "./UI";
import SwitcherTema from "./Components/SwitcherTema";

function App() {

  const [tema, setTema] = useState(true)

  const toogleTema = () => {
    setTema((tema) => !tema)
  }

  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
      <BtnTema onClick={toogleTema}>
        <SwitcherTema tema={tema}/>
      </BtnTema>
      <GlobalStyle />
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
