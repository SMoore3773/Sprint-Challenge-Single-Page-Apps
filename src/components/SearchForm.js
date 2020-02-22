import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard';

export default function SearchForm(props) {


 console.log('searchformprops',props)
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
console.log('searchterm',searchTerm)
console.log('searchresults',searchResults)
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
    <ul>
      {searchResults.map(char => {
        return <li key={char.id}><CharacterCard key={char.id} name={char.name} image={char.image}/></li>
      })}
    </ul>
    </section>
  );
}
