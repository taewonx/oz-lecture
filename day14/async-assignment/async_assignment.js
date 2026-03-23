const timerInput = document.querySelector("#timerInput");
const startTimer = document.querySelector("#startTimer");
const timerDisplay = document.querySelector("#timerDisplay");

const resetTimerInput = () => {
    // timerInput 초기화
    timerInput.value = "";
};

const resetTimerDisp = () => {
    // timerDisplay 초기화
    timerDisplay.textContent = "";
    timerDisplay.classList.remove('error');
};

const showTimerSec = (sec) => {
  resetTimerDisp();
    // timerDisplay에 sec 표시
    timerDisplay.textContent = "타이머: " + sec + "초";
};

const showTimerComplete = () => {
  resetTimerDisp();
  // timerDisplay에 타이머 종료 메세지 표시
    timerDisplay.textContent = "타이머 종료!";
    startTimer.disabled = false;
};

const showTimerError = () => {
    // timerDisplay에 오류 메세지 표시
    timerDisplay.classList.add("error");
    timerDisplay.textContent = "유효한 숫자(1-10)를 입력하세요!"
};

const processTimer = (sec) => {
  startTimer.disabled = true;
  showTimerSec(sec);
  // 1초마다 반복되는 함수
  const timer = setInterval(() => {
    // 1초마다 sec 감소,
    sec -= 1;
    // sec이 0보다 크면 sec 표시
    if (sec <= 0) {
      clearInterval(timer);
      // 타이머 종료 메세지 표시
      showTimerComplete();
    } else {
        showTimerSec(sec);
    }
  }, 1000);
};

// 타이머 시작
function handleClickTimer() {
    // timer input에서 sec 가져오기
    const sec = timerInput.value
    const secNum = Number(sec);
    if (secNum < 1 || secNum > 10 || isNaN(secNum)) {
        showTimerError();
        resetTimerInput();
    } else {
        processTimer(secNum);
    }
}
startTimer.addEventListener('click', handleClickTimer);