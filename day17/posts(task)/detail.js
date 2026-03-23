// detail.js (포스트 상세 화면용 JavaScript)
const apiUrl = "https://jsonplaceholder.typicode.com";

// 포스트 상세 정보 표시
async function displayPostDetail() {
    // URL에서 postId 가져오기
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get("postId");
        if (!postId) throw new Error("No post ID provided");
        
        // await fetch(`${apiUrl}/posts/${postId}`);
        let response = await fetch(`${apiUrl}/posts/${postId}`)
        if (!response.ok) {
            throw new Error ("error");
        };
        let post = await response.json();
        // localStorage에서 캐시 확인 (도전 과제)
        // localStorage에서 캐시가 조건에 충족하면 캐시 사용하여 post 초기화 (도전 과제)
        // localStorage에서 캐시가 조건에 충족하지 않으면 상세 데이터 fetch하여 post 초기화 

        
        renderPost(post);
    } catch (error) {
        console.error("Error:", error.message);
        document.getElementById("post-detail").innerHTML = "<p>Error loading post details</p>";
    }
}

// 포스트 렌더링 함수
function renderPost(post) {
    const postDetail = document.getElementById("post-detail");
    postDetail.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `;
    console.log(post);
}

// 페이지 로드 시 포스트 상세 정보 표시
displayPostDetail();
