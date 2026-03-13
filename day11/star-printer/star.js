const maxStars = 10;

while (true) {
    let input = prompt("Enter the number of stars (1-10)");
    let count = Number(input);

    if (isNaN(count) || count < 1 || count > maxStars) {
        console.log("Invalid input! Enter a number between 1 and 10.");
        continue;
    } else {
        printStars(count); 
        break;
    }
}

function printStars (count = 1) {
    var stars = "";
    for (let i = 0; i < count; i++) {
        stars += "*";
}
console.log(stars);
}