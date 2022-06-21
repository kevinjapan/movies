/*
#rradar interview test - working notes


tasks done: 
- `Movies` and `MovieCard` components created
- data filtering and mapping moved to own function
- Update the “like” button on the `MovieCard` component
- filter the list based on release date or budget
- Mock-up after the user clicked on a `MovieCard`
- UI component to set the number of results displayed


*/

import React, { useState,useEffect } from "react"
import { Card } from "semantic-ui-react";
import { faker } from "@faker-js/faker";
import movieData from "../../tmdb_5000_movies.json";
import { MIN_DISPLAY_RESULTS,MAX_DISPLAY_RESULTS  } from "../../config_list_displays"
import { has_higher_budget, has_lower_budget, has_newer_release_date, has_older_release_date } from "../../components/compare_funcs/compare_funcs"
import movieFilters from "../../movieFilters"
import { SortOptions } from "../../movieFilters"
import ResultsPerPage from "../../components/ResultsPerPage/ResultsPerPage"
import MoviesFilter from "../../components/MoviesFilter/MoviesFilter";
import MovieCard from "../../components/MovieCard/MovieCard";



const Movies = props => {

   const [movieData_DisplaySet,setDisplaySet] = useState([])
   const [order_movies_by,setOrderMoviesBy] = useState('')

   //
   // 'fetch' dataset - crude, but for current build we only want the first n results from test json file
   //
   useEffect(() => {
      setDisplaySet(movieData.slice(0, props.num_display_results))
   },[props.num_display_results])


   // 
   // change the no. results displayed while retaining the user specified order
   //
   const change_number_results = evt => {

      let num = parseInt(evt.target.value)
      if(isNaN(num)) return

      if(num > MAX_DISPLAY_RESULTS) {
         num = MAX_DISPLAY_RESULTS
      } else if (num < MIN_DISPLAY_RESULTS) {
         num = MIN_DISPLAY_RESULTS
      }

      // 'fetch' the new dataset
      let display_movies = movieData.slice(0, evt.target.value)
      let ordered_display_movies = order_movies(display_movies,order_movies_by)

      // load the new display set
      setDisplaySet(() => ([...ordered_display_movies]));
      
   }

   const change_movies_order = new_order_by => {
      let new_dataset = order_movies(movieData_DisplaySet,new_order_by)
      setDisplaySet(() => ([...new_dataset]));
   }

   //
   // return an array of ordered movies
   //
   const order_movies = (movies_list,order_by) => {

      if(!Array.isArray(movies_list)) return []
      setOrderMoviesBy(order_by)
      
      switch(order_by) {
         case SortOptions.SORT_BY_BUDGET_ASC:
            return movies_list.sort(has_higher_budget)
         case SortOptions.SORT_BY_BUDGET_DESC:
            return movies_list.sort(has_lower_budget)
         case SortOptions.SORT_BY_RELEASE_DATE_ASC:
            return movies_list.sort(has_newer_release_date)
         case SortOptions.SORT_BY_RELEASE_DATE_DESC:
            return movies_list.sort(has_older_release_date)
         default:
            return movies_list
      }
   }
   
   //
   // we display movieData_DisplaySet subset
   //
   const display_movie_cards = () => { 
      
      return movieData_DisplaySet.map((data, key) => 
         
         <MovieCard
            key={key}
            img={faker.image.cats(250, 250, true)}
            title={data.title}
            budget={data.budget}
            tagline={data.tagline}
            release_date={data.release_date}
            vote_average={data.vote_average}
            keywords={data.keywords[0]}
         />
      )
   }


   return ( 
      <>
         <div className="ui four column grid">
            <div className="row">
               <div className="column"></div>
               <div className="column"></div>
               <MoviesFilter 
                  filters={movieFilters}
                  onOrderAndFilter={change_movies_order}
               />
               <ResultsPerPage 
                  default_number={props.num_display_results}
                  onChangeNumberResults={change_number_results}
               />
            </div>
         </div>
         <Card.Group textAlign="center">
            {display_movie_cards()}
         </Card.Group>
      </>
   )
}


// sets default values for props
Movies.defaultProps = {
   num_display_results: 24
}


export default Movies