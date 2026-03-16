// 영화 목록 배열
let movies = [{
    title:"Gladiator",
    director:"Scott",
    year:2000,
    genre:"history",
}, {
    title:"The Dark Night",
    director:"Nolan",
    year:2008,
    genre:"action",
}, {
    title:"Interstellar",
    director:"Nolan",
    year:2014,
    genre:"SF",
}];



// 영화 목록 출력 함수
function printMovies(movies) {

    var count = movies.length 

    console.log("Movie Collection:");

    for (let i = 0; i < count; i++) {
    const list = movies[i];

    if (!list.title) list.title = "Unkown"
    if (!list.director) list.director = "Unkown"
    if (!list.year) list.year = "Unkown"
    if (!list.genre) list.genre = "Unkown"

    console.log(
        `${i+1}. Title: ${list.title}, Director: ${list.director}, Year: ${list.year}, Genre: ${list.genre}`
    );
}

    console.log(`Total Movies: ${count}`)
}

// 함수 출력
printMovies(movies);

// Nolan 감독의 영화 출력
// 1. for문 으로 출력
function nolanMovieFor(movies){

    var count = movies.length

    console.log("-----Nolan Moives(for)-----");

    for (let i = 0; i < count; i++) {
    const list = movies[i];

    if (list.director === "Nolan") {
    
        console.log(list);
    }
}
}
nolanMovieFor(movies);

// 2. for...in문 으로 출력
function nolanMovieForIn(movies){

    console.log("-----Nolan Moives(for...in)-----");

    for (let idx in movies) {

    if (movies[idx].director === "Nolan") {

        console.log(movies[idx]);
    }
}
}
nolanMovieForIn(movies);

// 3. for...of문 으로 출력
function nolanMovieForOf(movies){

    console.log("-----Nolan Moives(for...of)-----");

    for (let movie of movies) {

    if (movie.director === "Nolan") {

        console.log(movie);
    }
}
}
nolanMovieForOf(movies);

// 4. filter()로 출력
function nolanMovieFilter(movies) {

    console.log("-----Nolan Movies(filter)-----");

    const nolanMovies = movies.filter(function(movie) {
        return movie.director === "Nolan";
    });

    // const nolanMovies = movies.filter((movie) => movie.director === "Nolan");

    console.log(nolanMovies)
}
nolanMovieFilter(movies);

// 1. 평균 출판년도 계산
// 2. 가장 최신 영화 찾기
// 3. ...rest 사용하여 여러 영화 객체 한번에 추가
