let numberOfFilms

start()

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

getFilmInfo(personalMovieDB.movies)

detectPersonalLevel(personalMovieDB.count)

showMyDB(personalMovieDB.privat)

writeYourGenres(personalMovieDB.genres)

// console.log(personalMovieDB)

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

function start() {
    numberOfFilms = +prompt('How many films have you already watched?', '')

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have you already watched?', '')
    }
}

function getFilmInfo(movies) {
    for(let i = 0; i < 2; i++) {
        const getFilmTitle = prompt('What\'s the last movie you watched?', ''),
              getFilmRating = prompt('How do you rate it?', '');

        if(getFilmTitle != null && getFilmRating != null && getFilmTitle != '' && getFilmRating != '' && getFilmTitle.length < 50) {
            movies[getFilmTitle] = getFilmRating //  имя_обьекта.свойство_обьекта[ключ] = значение. когда записіваем какие-то свойства в обьект, лучше через [] а не через .
            console.log('done')
        } else {
            console.log('error')
            i--;
        }
    }
}

function detectPersonalLevel(count) {
    if(count <= 10) {
        console.log('Watched quite a few films')
    } else if (count > 10 && count <= 30) {
        console.log('You are a classic viewer')
    } else if (count > 30) {
        console.log('You are a cinephile!')
    } else {
        console.log('Error')
    }
}

function  showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB)
    }
}

function writeYourGenres(genre) {
    for (let i = 1; i <= 3; i++) {
        genre[i - 1] = prompt(`Your favorite genre has a number ${i}`)
    }
}