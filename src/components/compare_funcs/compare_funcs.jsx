//
// compare functions for sorting arrays of movies
//


export const has_higher_budget = (movie_a,movie_b) => {

   if (movie_a.budget > movie_b.budget) {
      return 1;
   } else if (movie_a.budget < movie_b.budget) {
      return -1;
   }
   return 0
}

export const has_lower_budget = (movie_a,movie_b) => {

   if (movie_a.budget > movie_b.budget) {
      return -1
   } else if (movie_a.budget < movie_b.budget) {
      return 1
   }
   return 0
}

export const has_newer_release_date = (movie_a,movie_b) => {

   const date_a = new Date(movie_a.release_date)
   const date_b = new Date(movie_b.release_date)

   if (date_a > date_b) {
      return -1
   } else if (date_a < date_b) {
      return 1
   }
   return 0
}

export const has_older_release_date = (movie_a,movie_b) => {

   const date_a = new Date(movie_a.release_date)
   const date_b = new Date(movie_b.release_date)

   if (date_a > date_b) {
      return 1
   } else if (date_a < date_b) {
      return -1
   }
   return 0
}
