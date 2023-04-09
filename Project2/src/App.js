import { useEffect, createContext, useContext, useState, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import MainPage from "./components/mainComponent";

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


  return (
    <Container>
      <MainPage />
    </Container>
  );
}


export default App;
