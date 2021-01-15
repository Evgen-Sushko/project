"use strict";

const namberOfFilms = +prompt("Skolko filmov vi posmotreli?", "0");
//console.log(namberOfFilms);

const personalMovieDB = {
	count: namberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
//console.log(personalMovieDB.privat);

const a = prompt("kakoi posledniy film?", ""),
	b = prompt("kakaya ocena?", "5"),
	c = prompt("kakoi posledniy film?", ""),
	d = prompt("kakaya ocena?", "5");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
