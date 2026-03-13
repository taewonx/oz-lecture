const STAR = "*";

const getPromptInput = () => {
    let input;
    let isNotValid = true;
    
    while (isNotValid) {
        let inputStr = prompt("출력할 별 갯수를 입력하세요.")
        input = Number(inputStr);
        if(isNaN(input)) {
            console.log('오류');
            continue;
        }
        isNotValid = false;
    }
    return input;
}

function printStar(input) {
    // 별찍기
    let string = ""
    for (let i = 0; i < input; i++) {
        string = string + STAR;
    }
    console.log(input);
    console.log(string);
}

const input = getPromptInput();
printStar(input);