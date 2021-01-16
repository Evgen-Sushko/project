"use strict";

const namberOfFilms = +prompt("Skolko filmov vi posmotreli?", "0");
//console.log(namberOfFilms);

//const a = true,
//b = false;  

const personalMovieDB = {
	count: namberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
//console.log(personalMovieDB.privat);


for (let i = 0; i < 2; i++) {
	const a = prompt("kakoi posledniy film?", ""),
	b = prompt("kakaya ocena?", "5");
	personalMovieDB.movies[a] = b;
	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		console.log("done");
	} else {
		console.log("error");
		i--;
	}
	if (personalMovieDB.count < 10) {
		console.log("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("Вы классический зритель");
	}else if (personalMovieDB.count >= 30) {
		console.log("Вы киноман");
	} else {
		console.log("Произошла ошибка");
	}
}

console.log(personalMovieDB);