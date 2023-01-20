import React, { useState } from 'react';
import '../App.css';
import {useNavigate } from 'react-router-dom';

function Landing() {
  
  const [recipe, setRecipe] = useState(""); // data about the component and manage changing data 
  const navigate= useNavigate(); // using a function from the routing
  const submitForm = (event) =>{ 

    event.preventDefault();
    navigate('/recipe/'+ recipe); // push to new page with new recipe

    
  }
  
  
  
  return (
    <div class= 'landing-body'>
      <div class= 'centered'>
        <h1 class='landing-title'>The Cutting Board</h1>
        <form>
          <input onChange={(event)=>{ setRecipe(event.target.value)} } class= 'Search-input' type= 'search' placeholder='Find a Recepie'></input> 
          <button onClick={submitForm} class='submit-btn' type='submit'>Search</button>
        </form>

      </div>


    </div>
  )
}

export default Landing
