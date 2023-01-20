import { React, useEffect, useState } from "react";
import axios from 'axios';
import '../App.css';
import { useParams, useNavigate } from 'react-router-dom';

function Searched() {

  const [searchedRecipe, setSearchedRecipe] = useState([]);
  let params = useParams();
  const navigate = useNavigate();


  useEffect(() => { // everytime the screen is rendered: or if the prameter is changed use


    const getSearch = (e) => {
      //make the get req using axios lib
      axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + params.term) // params use the pram in url
        // once send the req then: 
        .then(function (respone) {
          console.log(respone.data.meals)
          setSearchedRecipe(respone.data.meals)
  
          if (respone.data.meals == null) {
            setSearchedRecipe([]);
            const nullDisplay = document.getElementById('request-null');
            nullDisplay.classList.remove('hidden');
          }
          else {
            const showDisplay = document.getElementById('request-exists');
            showDisplay.classList.remove('hidden');
          }
  
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    getSearch()
  }, [params.term])


  


  return (
    <div>


          <div id='request-null' class='hidden centered' >
         <h1 class='landing-title'>No Recipe Found </h1>
         <p1 class='simple-p1'>Try searching chicken, beef, apple, or some other ingredient</p1>
          </div>




          <div id='request-exists' class='hidden'>



      <header class='search-header'>{params.term}
        <button class='return-button' onClick={() => navigate(-1)}>Back</button> 
      </header>
      <div class='searched-body'>
        <div class='searched-container'>

          {searchedRecipe.map((item) => {
            /*Map minipulates the item in an array by iterating and accessing individual items
            Searched Recipe array returned by get req*/

            return (
              <div class='card' key={item.idMeal}>
                <div class='card-header'>
                  <img src={item.strMealThumb} alt="IMG NOT FOUND"></img> 
                </div>
                <div class='card-body'>
                  <h1>{item.strMeal}</h1>
                  <p>Meal Category: {item.strCategory}</p>
                  <p>Meal Area: {item.strArea}</p>
                  <p>Meal Tags: {item.strTags}</p>

                  <div class='tag-container'>

                    <a class='tag' target='_blank' rel='noreferrer' href={item.strSource}>recipe</a>
                    <a class='tag' target='_blank' rel='noreferrer' href={item.strYoutube}>Youtube</a>


                  </div>

                </div>

              </div>
            )

          })}

        </div>
      </div>


      </div>

    </div>
  )
}

export default Searched