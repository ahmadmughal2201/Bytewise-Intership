import styled from "styled-components"
import { Link, Route, Routes } from "react-router-dom"
import React, { useEffect, useState } from "react";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 30px 0 10px;
`;

const Header = styled.span`
  color: black;
  font-size: 25px;
  font-weight:bold; 
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
background:black;
color:white;
padding: 5px 10px;
border-radius: 4px;
cursor: pointer;
font-size:15px;
font-weight:bold;
`;

function App() {

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [msg, setMsg] = useState(null);


  const inc1 = () => {
    setCounter1(counter1 + 1);
  }

  const inc2 = () => {
    setCounter2(counter2 + 1);
  }

  useEffect(() => {
    setMsg("first counter incremented")
  }, [counter1])

  useEffect(() => {
    setMsg("second counter incremented")
  }, [counter2])

  return (
    <>
      <Container>

        <ExpenseBox>
          <span>{counter1} </span>
        </ExpenseBox>
        <AddButton onClick={inc1}>Increment</AddButton>

        <ExpenseBox>
          <span>{counter2} </span>
        </ExpenseBox>
        <AddButton onClick={inc2}>Increment</AddButton>

        <Header>{msg}</Header>
      </Container>

    </>
  )
}

export default App;
