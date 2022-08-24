const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many films have you already watched?', '')

        while(personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films have you already watched?', '')
        }
    },
    getFilmInfo: function() {
        for(let i = 0; i < 2; i++) {
            const getFilmTitle = prompt('What\'s the last movie you watched?', ''),
                getFilmRating = prompt('How do you rate it?', '')

            if(getFilmTitle != null && getFilmRating != null && getFilmTitle !== '' && getFilmRating !== '' && getFilmTitle.length < 50) {
                personalMovieDB.movies[getFilmTitle] = getFilmRating
                //  имя_обьекта.свойство_обьекта[ключ] = значение. когда записіваем какие-то свойства в обьект, лучше через [] а не через .
                console.log('done')
            } else {
                console.log('error')
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if(personalMovieDB.count <= 10) {
            console.log('Watched quite a few films')
        } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
            console.log('You are a classic viewer')
        } else if (personalMovieDB.count > 30) {
            console.log('You are a cinephile!')
        } else {
            console.log('Error')
        }
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB)
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false
        } else {
            personalMovieDB.privat = true
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre= prompt(`Your favorite genre has a number ${i}`)

            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе')
                i--
            } else {
                personalMovieDB.genres[i - 1] = genre
            }

        // Альтернативный вариант из урока

        // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

        // if (genres === '' || genres == null) {
        //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
        //     i--;
        // } else {
        //     personalMovieDB.genres = genres.split(', ');
        //     personalMovieDB.genres.sort();
        // }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`)
        })
    }
}


/*альтернатива
getFilmInfo(movies) {
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
while(i < 2) }*/
/*альтернатива
getFilmInfo(movies) {
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
} }*/

