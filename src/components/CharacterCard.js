import React from "react";


export default function CharacterCard(props) {
console.log(props.image)
  return (
  
  <div>
    <h2>{props.name}</h2>
    <img src={props.image} alt='character image'/>
  </div>
  
  );

}
