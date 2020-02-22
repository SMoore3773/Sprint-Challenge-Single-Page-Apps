import React from "react";
import Header from "./components/Header.js";
import {browserRouter as Router, Route, NavLink} from 'react-router-dom';
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from './components/CharacterList';

export default function App() {
  return (
    <main>
      <Header />
      <NavLink to='/'className='navButton'>Home</NavLink>
      <NavLink to='/CharacterList' className='navButton'>Character List</NavLink>
     
      <Route exact path='/' component={WelcomePage}/>
      <Route path='/CharacterList' component={CharacterList}/>
    </main>
  );
}
