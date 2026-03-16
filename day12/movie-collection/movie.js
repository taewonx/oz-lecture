// 영화 목록 배열
let movies = [{
    title:"",
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