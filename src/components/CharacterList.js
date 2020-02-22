import React, { useEffect, useState } from "react";
import axios from 'axios'
import CharacterCard from './CharacterCard'


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response =>{
      setCharacterList(response.data.results);
      console.log('characterList',characterList);
    })
    .catch(err => {
      console.log('error:', err)
    })
  }, []);
  console.log(characterList);

  return (
    <section className="character-list">
      {characterList.map(character=>(
        <CharacterCard key={character.id} name={character.name} image={character.image}/>
      ))}
      
    </section>
  );
}
