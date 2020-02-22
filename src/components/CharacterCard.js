import React from "react";
import styled from 'styled-components';

const CharacterCrd = styled.div`
display:flex;
flex-direction:column;
text-align:center;

`
const CharaterName = styled.h2`
text-shadow: 0 0 5px yellow;
`
const CaracterImg = styled.img`
margin:auto;

`
export default function CharacterCard(props) {

  return (
  
  <CharacterCrd>
    <CharaterName>{props.name}</CharaterName>
    <CaracterImg src={props.image} alt='character image'/>
  </CharacterCrd>
  
  );

}
