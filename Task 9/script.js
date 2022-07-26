/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

const movie = {
  title: "movie 1",
  director: "director 1",
  budget: 1000000,
};

console.log(movie);

function Movie(title, director, budget) {
  this.title = title;
  this.director = director;
  this.budget = budget;
}

const movie1 = new Movie("movie 1", "director 1", 5221000000);
const movie2 = new Movie("movie 2", "director 2", 2221000000);
const movie3 = new Movie("movie 3", "director 3", 21000000);

Movie.prototype.getSummary = function () {
  return `${this.title} was directed by ${this.director} and cost ${this.budget} USD`;
};

//dabar turiu prisidėti funkciją, kaip naują parametrą, kuris duotų papildomą
// reikšmę true, prie kiekvieno filmo, kurio biudžetas > 100000000.
// nežinau kaip teisingai ją aprašyti.

// Movie.prototype.expensive = function (wasExpensive) {
//   this.budget = wasExpensive;
//   this.expensive = if (this.budget > 100000000) {
//     true;
//   } else {
//     false;
//   };
// };

console.log(movie1);
console.log(movie2);
console.log(movie3);

console.log(movie1.getSummary());
console.log(movie2.getSummary());
console.log(movie3.getSummary());
