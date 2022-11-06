import { useState } from "react";
import "./App.css";
import styled, { css, ThemeProvider } from "styled-components";

type TStyledHeaderProps = {
  bg?: string;
};
const StyledHeader = styled.h1<TStyledHeaderProps>`
  color: ${(props) => props.theme.main};
  font-size: 40px;
  background: ${(props) => (props.bg ? props.bg : "transparent")};
`;

const StyledData = styled("p")`
  color: ${(props) => props.theme.main};
  font-size: 25px;
`;

type TStyledButtonProps = {
  variant?: "sucess" | "falied";
};

// const rotateFrame = keyframes`
// from {
//   transform: rotate(0deg)
// }
// to{
//   transform: rotate(360deg)
// }
// `;

const theme = {
  main: "purple",
};

const themeGreen = {
  main: "green",
  secondary: "black",
};
const themeBlack = {
  main: "black",
  secondary: "black",
};

const StyledButton = styled.button<TStyledButtonProps>`
  background-color: transparent;
  border-radius: 8px;
  border: 2px solid black;
  padding: 8px 16px;
  :hover {
    cursor: pointer;
    background-color: #ffe5e5;
  }

  ${(props) => {
    if (props.variant === "sucess") {
      return css`
        border-color: green;
        color: green;
      `;
    }
    if (props.variant === "falied") {
      return css`
        border-color: red;
        color: red;
      `;
    }
  }}
`;

function App() {
  const [theme, setTheme] = useState(themeGreen);

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ textAlign: "center" }}>
        <div>
          <StyledButton
            onClick={() => setTheme(themeGreen)}
            style={{ marginTop: "16px", marginLeft: "8px" }}
            variant="sucess"
          >
            Verde
          </StyledButton>
          <StyledButton
            onClick={() => setTheme(themeBlack)}
            style={{ marginTop: "16px", marginLeft: "8px" }}
          >
            Preto
          </StyledButton>
        </div>

        <StyledHeader style={{ marginTop: "16px", marginLeft: "8px" }}>
          Leandro Calado
        </StyledHeader>
        <StyledData style={{ marginTop: "16px", marginLeft: "8px" }}>
          {" "}
          lcaladoferreira@gmail.com
        </StyledData>
        <StyledData style={{ marginTop: "16px", marginLeft: "8px" }}>
          11-98776-6080
        </StyledData>
        <StyledData style={{ marginTop: "16px", marginLeft: "8px" }}>
          Brasil
        </StyledData>

        <StyledButton
          style={{ marginTop: "16px", marginLeft: "8px" }}
          variant="sucess"
        >
          Adicionar
        </StyledButton>

        <StyledButton style={{ marginLeft: "8px" }} variant="falied">
          Remover
        </StyledButton>

        <StyledButton style={{ marginLeft: "8px" }}>Detalhes</StyledButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
