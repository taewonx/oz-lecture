// 변수 선언
var num= 1;
console.log(num);
var num = 2;
console.log(num);
num = 3;
console.log(num);

let string = "안녕하세요";
console.log(string);
// let string = "28"       // 변수 재선언 불가
string = "반갑습니다";      // 재할당 가능
console.log(string);

const boolean = true;
console.log(boolean);
// const boolean = "math"     // 재할당 불가

// 문자열 처리
let string1 = "이스케이프 \n문자(줄바꿈)";
console.log(string1);
let string2 = "이스케이프 \t문자(tab)";
console.log(string2);
let string3 = "문자열" + " 연결";
console.log(string3);

// 배열 리터럴
let hobbies = ["reading", "gaming", "coding",]
console.log("My hobbies: " + hobbies)
console.log(hobbies[0]);     // reading
console.log(hobbies[1]);     // gaming
console.log(hobbies[2]);     // coding

// 객체 리터럴
let personalInformation = {
    name: "John",
    age: 20,
    isStudent: true
};
console.log(personalInformation. name);
console.log(personalInformation. age);
console.log(personalInformation. isStudent);

// typeof
console.log(typeof num);
console.log(typeof string);
console.log(typeof boolean)

console.log(typeof hobbies);
console.log(typeof personalInformation);        //object

console.log(typeof hobbies[0]);
console.log(typeof hobbies[1]);
console.log(typeof hobbies[2]);    // string x 3

console.log(typeof personalInformation. name);
console.log(typeof personalInformation. age);
console.log(typeof personalInformation. isStudent);     //string, number, boolean

// 도전과제
// null과 undefined 구분




// 템플릿 문자열




//추가 데이터 저리


