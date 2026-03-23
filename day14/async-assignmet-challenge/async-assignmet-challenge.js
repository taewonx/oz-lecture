// 1. 변수 선언 (const 사용)
const output = document.getElementById("output");
const btnFetchPosts = document.getElementById("fetchPosts");
const inputPostIds = document.getElementById("postIds");

// UI 초기화 및 에러 메시지 표시 함수
const displayMessage = (msg, isError = false) => {
  output.innerHTML = msg;
  if (isError) {
    output.classList.add("error");
  } else {
    output.classList.remove("error");
  }
};

// 2. 개별 게시물 가져오기 (async/await, try/catch)
const fetchPost = async (postId) => {
  try {
    // (요구사항: var 사용)
    var url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    let response = await fetch(url);
    
    if (!response.ok) throw new Error("데이터를 찾을 수 없습니다.");
    
    let post = await response.json();
    return post;
  } catch (error) {
    return { error: error.message }; // 에러 발생 시 에러 객체 반환
  }
};

// 3. 다중 데이터 가져오기 (요구사항: 화살표 함수, ...rest 사용)
const fetchMultiplePosts = async (...postIds) => {
  const results = {}; // 결과를 담을 객체

  // (요구사항: for...of 사용)
  for (const id of postIds) {
    const trimmedId = id.trim();
    if (!trimmedId) continue;

    // 1~100 범위 체크
    const numId = Number(trimmedId);
    if (isNaN(numId) || numId < 1 || numId > 100) {
      results[`post${trimmedId}`] = { error: "유효한 ID(1-100)를 입력하세요!" };
      continue;
    }

    const data = await fetchPost(numId);
    results[`post${trimmedId}`] = data;
  }
  return results;
};

// 4. 메인 로직 실행 (요구사항: 함수 표현식 사용)
const runChallenge = async function() {
  const rawInput = inputPostIds.value;
  
  // 입력값이 아예 없을 때
  if (!rawInput.trim()) {
    displayMessage("유효한 ID(1-100)를 입력하세요!", true);
    return;
  }

  // 버튼 비활성화
  btnFetchPosts.disabled = true;
  output.innerHTML = "데이터를 불러오는 중...";

  // 쉼표로 분리하여 배열 생성
  const idArray = rawInput.split(",");

  // 비동기 처리 실행 (...rest 전달)
  const allData = await fetchMultiplePosts(...idArray);

  // 화면 렌더링 시작
  let finalHtml = "";
  let hasValidInput = false;

  // (요구사항: for...in 사용)
  for (const key in allData) {
    hasValidInput = true;
    const item = allData[key];

    if (item.error) {
      // 에러가 포함된 경우 (빨간색 표시)
      finalHtml += `<div class="post error">${key}: 에러: [${item.error}]</div>`;
    } else {
      // 성공한 경우
      finalHtml += `<div class="post">${key}: [${item.title}]</div>`;
    }
  }

  // 최종 결과 출력
  if (!hasValidInput) {
    displayMessage("유효한 ID(1-100)를 입력하세요!", true);
  } else {
    output.innerHTML = finalHtml;
  }

  // 버튼 재활성화
  btnFetchPosts.disabled = false;
};

// 이벤트 리스너 등록
btnFetchPosts.addEventListener("click", runChallenge);