import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
 console.log('searchformprops',props)
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(props.name);
  // useEffect(() =>{
  //   const results = 
  // })

  return (
    <section className="search-form">
    <form>
     <label htmlFor='name'>Search:</label>
      <input
        id='name'
        type='text'
        name='testfield'
        placeholder='Search Characters'
      />
    </form>
    </section>
  );
}
