const numberOfFilms = +prompt('How many films have you already watched?', '')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

const getFilmTitle1 = prompt('What\'s the last movie you watched?', ''),
      getFilmRating1 = prompt('How do you rate it?', ''),
      getFilmTitle2 = prompt('What\'s the last movie you watched?', ''),
      getFilmRating2 = prompt('How do you rate it?', '')

personalMovieDB.movies[getFilmTitle1] = getFilmRating1 //  имя_обьекта.свойство_обьекта[ключ] = значение
personalMovieDB.movies[getFilmTitle2] = getFilmRating2 // когда записіваем какие-то свойства в обьект, лучше через [] а не через .
console.log(personalMovieDB)