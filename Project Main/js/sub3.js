// on


// 모든 버튼에 대해 이벤트 리스너 추가
document.querySelectorAll('.text_box a').forEach(button => {
    button.addEventListener('click', function() {
        // 클릭 시 on 클래스를 토글하여 활성화 상태 변경
        button.classList.toggle('on');
    });
});


// 첨부파일

function displayFileName() {
    const fileInput = document.getElementById('file-upload');
    const fileName = document.getElementById('file-name');

    if (fileInput.files.length > 0) {
        fileName.textContent = fileInput.files[0].name;
    } else {
        fileName.textContent = "선택된 파일 없음";
    }
}
