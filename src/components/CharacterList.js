import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(characterList);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response =>{
      setCharacterList(response.data.results);
      console.log('characterList',response.data.results);
    })
    .catch(err => {
      console.log('error:', err)
    })
  }, []);

  // useEffect(()=>{
  //   const results = props.charList.filter(char =>{
  //     return char.name.toLowerCase().includes(searchTerm.toLowerCase());
  //   });
  //   setSearchResults(results);
  // },[searchTerm]);

  console.log(characterList);



  return (
    <section className="character-list">
      <SearchForm key={characterList.id} charList={characterList} searchTerm={searchTerm} setSearchTerm = {setSearchTerm} searchResults={searchResults} setSearchResults={setSearchResults}/>
      {/* {characterList.map(character=>(
        <CharacterCard key={character.id} name={character.name} image={character.image}/>
      ))} */}
      
    </section>
  );
}
