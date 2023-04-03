import {useEffect, createContext, useContext, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

const themes = {
  light: {
    backgroundColor: "white",
    color: "black",
  },
  dark: {
    backgroundColor: "black",
    color: "white",
  },
};

const ThemeContext = createContext();

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
`;

const Header = styled.span`
  color: ${(props) => props.theme.color};
  font-size: 25px;
  font-weight: bold;
`;

const ExpenseBox = styled.div`
  border-radius: 4px;
  border: 1px solid #e6e8e9;
  padding: 15px 20px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 135px;
  & span {
    color: green;
    font-weight: bold;
    font-size: 20px;
  }
`;

const AddButton = styled.button`
  background: black;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px


`;

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [msg, setMsg] = useState(null);
  const [theme, setTheme] = useState(themes.light);

  const inc1 = () => {
    setCounter1((prev) => prev + 1);
  };

  const inc2 = () => {
    setCounter2((prev) => prev + 1);
  };

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === themes.light ? themes.dark : themes.light
    );
  };

  useEffect(() => {
    setMsg("first counter incremented");
  }, [counter1]);

  useEffect(() => {
    setMsg("second counter incremented");
  }, [counter2]);

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProvider theme={theme}>
        <Container>
          <ExpenseBox>
            <span>{counter1} </span>
          </ExpenseBox>
          <AddButton onClick={inc1}>Increment</AddButton>

          <ExpenseBox>
            <span>{counter2} </span>
          </ExpenseBox>
          <AddButton onClick={inc2}>Increment</AddButton>

          <Header isVisible={msg !== null}>{msg}</Header>
          <AddButton onClick={toggleTheme}>Toggle Theme</AddButton>
        </Container>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}


export default App;
