const maxStars = 10;
let input;
var stars;

// 별 출력 함수
function printStars(count = 1) {

    stars = "";

    for (let i = 0; i < count; i++) {
        stars += "*";
    }

    console.log(stars);
}

while (true) {

    input = prompt("Enter the number of stars (1-10):");

    let num = Number(input);

    if (!isNaN(num) && num >= 1 && num <= maxStars) {

        printStars(num);

        break;

    } else {

        console.log("Invalid input! Enter a number between 1 and 10.");

        continue;
    }
}