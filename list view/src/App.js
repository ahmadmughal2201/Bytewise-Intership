import styled from "styled-components"
import HomeComponent  from "./modules/home";

const Container= styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 30px 0 10px;
`;

const Header=styled.span`
  color: black;
  font-size: 25px;
  font-weight:bold; 
`; 
const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "What do you get when you cross a snowman and a shark? Frostbite!",
  "Why don't oysters give to charity? Because they're shellfish!",
  "Why did the math book look sad? Because it had too many problems."
];



function App() {
  return (
   <Container>
    {
      jokes.map((joke, index)=>(
        <p key={index}>{joke}</p>
      ))
    }

   </Container>
  );
}

export default App;
