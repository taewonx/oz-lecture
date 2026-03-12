const maxScore = 100;

let input = prompt("점수를 입력하세요.");
let score = Number(input);

var grade;

// 입력 유효성 검사
if (isNaN(score) || score < 0 || score > 100) {
    console.log("Invalid score! Please enter a number between 0 and 100.")
}
// 단항 부정
// if (!isNaN(score) && score >= 0 && score <= 100) {
//     console.log("Invalid score! Please enter a number between 0 and 100.")
// }

// 추가 연산
score++;        // 단항 산술
score += 5;     // 보너스 점수 +5
score *=1.1;    // 복합 대입


// 복잡한 조건1
if (score > maxScore) score = maxScore;


// 등급
if (score === 100) {
    grade = "S";
} else if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

// 합불 여부
let status = (score >= 60) ? "Pass" : "Fail";

// 등급별 메세지
let message;
switch (grade) {
    case "S":
        if (score === 100){
        message = "Perfect Score!";
        }   // 복잡한 조건2
        break;
    case "A":
        message = "Excellent work!";
        break;
    case "B":
        message = "Good job!";
        break;
    case "C":
        message = "Satisfactory performance.";
        break;
    case "D":
        message = "Needs improvement.";
        break;
    default :
        message = "Please try harder!";
        break;
}


console.log("Final Score: " + score);
console.log("Grade: " + grade);
console.log("Status: " + status);
console.log("Message: " + message);