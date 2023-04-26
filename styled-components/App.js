import styled from "styled-components"
import HomeComponent from "./modules/home";
import Transaction from "./modules/Transaction";
import Overview from "./modules/Overview";
import {Link,Route,Routes} from "react-router-dom"

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


function App() {
  return(
  <>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/trans">Transaction</Link>
      </li>
    </ul>
    <Routes>
      <Route path="/" element={<Overview/>} />
      <Route path="/trans" element={<Transaction/>} />
    </Routes>
  </>
  )
}

export default App;
