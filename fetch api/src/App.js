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

  const [stories, setStories] = useState([]);

  useEffect(() => {
    async function fetchStories() {
      const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
      const data = await response.json();
      setStories(data);
    }

    fetchStories();
  }, []);

  useEffect(() => {
    console.log(JSON.stringify(stories));
  }, [stories]);

  return (
    <>
      <Container>
        <Header>check console</Header>
      </Container>

    </>
  )
}

export default App;
