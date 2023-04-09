import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AnimatedCard from './animatedCard';
import styled, { ThemeProvider } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin:0%;
  width:100%;
background-color:#553973;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0%;
  width:100%;
  height: 1005px;

background-color:#553973;
`;

const AddButton = styled.button`
  background: #89b4c4;
  color: white;
  padding: 5px 10px;
  border-radius: 24px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
  border: none;

`;

const Input = styled.input`
  background: #e6eff6;
  color: white;
  height:25px;
  padding: 5px 10px;
  width: 25%;
  border-radius: 24px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top:30px;
  border: none;
`;

const Header = styled.span`
  color: #548999;
  font-size: 25px;
  font-weight: bold;
`;

const MainPage = () => {

  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoad] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [pokemonName, setPokemonName] = useState("");

  const fetchPokemon = async () => {
    setLoad(true)
    const res = await axios.get(url)
    setPokeData([res.data])
    console.log(res.data.results)
    setLoad(false)
  }

  const searchPokemon = () => {
    setUrl(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
  }

  useEffect(() => {
    fetchPokemon();
  }, [url])

  return (
    <MainContainer>

      <Input type="text" value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} />

      <AddButton onClick={searchPokemon}>Search Pokemon</AddButton>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <Container>


          {pokeData[0].sprites && pokeData[0].sprites.front_default && (
            <>
            <Header>Hover please :)</Header>

            <AnimatedCard name={pokeData[0].name} imageUrl={pokeData[0].sprites.front_default} />
            </>
          )}        </Container>
      )}

    </MainContainer>
  )
}

export default MainPage
