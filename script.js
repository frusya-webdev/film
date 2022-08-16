const numberOfFilms = prompt('How many films have you already watched?', '')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

for(let i = 0; i < 2; i++) {
    const getFilmTitle = prompt('What\'s the last movie you watched?', ''),
        getFilmRating = prompt('How do you rate it?', '');

    if(getFilmTitle != null && getFilmRating != null && getFilmTitle != '' && getFilmRating != '' && getFilmTitle.length < 50) {
        personalMovieDB.movies[getFilmTitle] = getFilmRating //  имя_обьекта.свойство_обьекта[ключ] = значение. когда записіваем какие-то свойства в обьект, лучше через [] а не через .
        console.log('done')
    }
    else {
        console.log('error')
        i--;
    }
}

/*альтернатива
let i = 0;
do {
    const getFilmTitle = prompt('What\'s the last movie you watched?', ''),
          getFilmRating = prompt('How do you rate it?', '');

    if (getFilmTitle != null && getFilmRating != null && getFilmTitle != '' && getFilmRating != '' && getFilmTitle.length < 50) {
        personalMovieDB.movies[getFilmTitle] = getFilmRating //  имя_обьекта.свойство_обьекта[ключ] = значение. когда записіваем какие-то свойства в обьект, лучше через [] а не через .
        console.log('done')
    } else {
        console.log('error')
        i--;
    }
    i++;
}
while(i < 2)*/

/*альтернатива
let i = 0;
while(i < 2) {
    const getFilmTitle = prompt('What\'s the last movie you watched?', ''),
          getFilmRating = prompt('How do you rate it?', '');

    if (getFilmTitle != null && getFilmRating != null && getFilmTitle != '' && getFilmRating != '' && getFilmTitle.length < 50) {
        personalMovieDB.movies[getFilmTitle] = getFilmRating //  имя_обьекта.свойство_обьекта[ключ] = значение. когда записіваем какие-то свойства в обьект, лучше через [] а не через .
        console.log('done')
    } else {
        console.log('error')
        i--;
    }
    i++;
}*/

if(personalMovieDB.count <= 10) {
    console.log('Watched quite a few films')
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    console.log('You are a classic viewer')
} else if (personalMovieDB.count > 30) {
    console.log('You are a cinephile!')
} else {
    console.log('Error')
}

console.log(personalMovieDB)
