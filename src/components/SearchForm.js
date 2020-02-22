import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

const Ul = styled.ul`
display:flex;
flex-direction:column;
justify-content:center;
list-style-type:none;
width:100%;
`
const Li = styled.li`
width:100%;
`
export default function SearchForm(props) {


//  console.log('searchformprops',props)
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(props.charList);

useEffect(()=>{
  const results = props.charList.filter(char =>{
    return char.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  setSearchResults(results);
},[searchTerm]);

const handleChange = event => {
  setSearchTerm(event.target.value)
};
// console.log('searchterm',searchTerm)
// console.log('searchresults',searchResults)
  return (
    <section className="search-form">
    <form>
     <label htmlFor='name'>Search:</label>
      <input
        id='name'
        type='text'
        name='testfield'
        placeholder='Search Characters'
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
    <Ul>
      {searchResults.map(char => {
        return <Li key={char}><CharacterCard key={char.id} name={char.name} image={char.image}/></Li>
      })}
    </Ul>
    </section>
  );
}
