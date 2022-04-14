// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesParam) {
  let directors = movies.map((eachMovie) => {
    return eachMovie.director
  })
  return directors
}
console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesParam) {
  let genero = moviesParam.filter((eachmovie) => {
    if( eachmovie.director === "Steven Spielberg" &&  eachmovie.genre.includes("Drama"))
    return eachmovie
  })
  return genero
}
console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesParam) {
  let total = moviesParam.reduce((acc, elem) => {
    if (elem.score !== undefined){
  return acc + elem.score
}
  else{
    return acc;
  }
  }, 0)
let avg = total /moviesParam.length
let toDigit =avg.toFixed(2)
let toDigitNum = parseFloat(toDigit)
return toDigitNum;
}

console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesParam) {
  let total = moviesParam.reduce((acc, elem) => {
    if (elem.score !== undefined && elem.genre.includes("Drama")){
  return acc + elem.score
}
  else{
    return acc;
  }
  }, 0)
let avg = total /moviesParam.length
let toDigit =avg.toFixed(2)
let toDigitNum = parseFloat(toDigit)
return toDigitNum;
}

console.log(dramaMoviesScore(movies))


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)´
function orderByYear(moviesParam) {
  
  let mapAs = moviesParam.map((movie)=>{
    return movie
  })
  mapAs.sort((movie1, movie2) => {
    if(movie1.year > movie2.year){
      return 1
    }else if(movie1.year < movie2.year){
      return -1
    }else if(movie1.title > movie2.title){
      return 1
    }else if(movie1.title < movie2.title){
      return -1
    }
  })
  return mapAs
}

console.log (orderByYear(movies))


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesParam) {
  let orderAlphabetically = moviesParam.map((movie)=>{
    return movie
  })
  orderAlphabetically.sort((movie1, movie2) => {
    if(movie1.title > movie2.title){
      return 1
    }else if(movie1.title < movie2.title){
      return -1
    }
  })
  orderAlphabetically = orderAlphabetically.slice(0, 20)
  return orderAlphabetically
}
console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
