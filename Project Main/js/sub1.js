// brand story count1(532)

// 카운트를 표시할 요소
const $counter = document.querySelector(".count1");

// 목표수치
const max = 532;

let countStarted = false; // 애니메이션 시작 여부를 확인하기 위한 변수

// Intersection Observer 설정
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !countStarted) {
            countStarted = true; // 애니메이션이 한 번만 시작되도록 설정
            counter($counter, max);
            observer.unobserve($counter); // 애니메이션이 시작된 이후에는 관찰 해제
        }
    });
}, { threshold: 0.5 }); // 요소의 50%가 보일 때 트리거

observer.observe($counter); // 카운터 요소를 관찰 시작

function counter($counter, max) {
    let now = max;

    const handle = setInterval(() => {
        $counter.innerHTML = Math.ceil(max - now);

        // 목표에 도달하면 정지
        if (now < 1) {
            clearInterval(handle);
        }

        // 적용될 수치, 점점 줄어듬
        const step = now / 10;

        now -= step;
    }, 50);
}


// brand story count2(20)

// 목표수치
const $count2 = document.querySelector(".count2 p");
const maxCount2 = 20;

let count2Started = false; // 애니메이션 시작 여부를 확인하기 위한 변수

// Intersection Observer 설정 (count2 관찰)
const count2Observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !count2Started) {
            count2Started = true; // 애니메이션이 한 번만 시작되도록 설정
            animateCount2($count2, maxCount2);
            observer.unobserve($count2); // 애니메이션이 시작된 이후에는 관찰 해제
        }
    });
}, { threshold: 0.5 }); // 요소의 50%가 보일 때 트리거

count2Observer.observe($count2); // count2 요소를 관찰 시작

// count2 애니메이션 함수
function animateCount2($count2, max) {
    $({ val: 0 }).animate({ val: max }, {
        duration: 2000, // 애니메이션 지속 시간 (밀리초)
        step: function (now) {
            $count2.innerHTML = Math.floor(now);
        },
        complete: function () {
            $count2.innerHTML = max; // 애니메이션이 끝나면 목표값으로 설정
        }
    });
}

// brand story h1, text box 스크롤 효과

$(document).ready(function () {
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var triggerPoint = 100; // h1 색상을 바꿀 스크롤 위치
        var textBoxTriggerPoint = 400; // text_box 색상을 바꿀 스크롤 위치 (h1보다 늦게 변경되도록 설정)

        // h1 색상 변경
        if (scrollPosition > triggerPoint) {
            $('.brand_story_center h1').css('color', '#fff');
        } else {
            $('.brand_story_center h1').css('color', '#000');
        }

        // text_box 색상 변경
        if (scrollPosition > textBoxTriggerPoint) {
            $('.brand_story_center .text_box').css('color', '#fff');
        } else {
            $('.brand_story_center .text_box').css('color', '#000');
        }
    });
});


// our_right_img

document.addEventListener("DOMContentLoaded", function () {
    const ourRightImgs = document.querySelectorAll(".our_right_img");

    // Intersection Observer 설정
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // 요소가 보일 때 visible 클래스 추가
            } else {
                entry.target.classList.remove("visible"); // 요소가 보이지 않을 때 visible 클래스 제거
            }
        });
    }, { threshold: 0.5 }); // 요소의 50%가 보일 때 트리거

    // 각 이미지에 대해 관찰 시작
    ourRightImgs.forEach(img => {
        observer.observe(img);
    });
});


// our_left_img

document.addEventListener("DOMContentLoaded", function () {
    const ourRightImgs = document.querySelectorAll(".our_right_img");
    const ourLeftImgs = document.querySelectorAll(".our_left_img");

    // Intersection Observer 설정 (our_right_img 관찰)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // 요소가 보일 때 visible 클래스 추가
            } else {
                entry.target.classList.remove("visible"); // 요소가 보이지 않을 때 visible 클래스 제거
            }
        });
    }, { threshold: 0.5 }); // 요소의 50%가 보일 때 트리거

    // 각 our_right_img에 대해 관찰 시작
    ourRightImgs.forEach(img => {
        observer.observe(img);
    });

    // Intersection Observer 설정 (our_left_img 관찰)
    const leftImgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in"); // 요소가 보일 때 fade-in 클래스 추가
            } else {
                entry.target.classList.remove("fade-in"); // 요소가 보이지 않을 때 fade-in 클래스 제거
            }
        });
    }, { threshold: 0.5 }); // 요소의 50%가 보일 때 트리거

    // 각 our_left_img에 대해 관찰 시작
    ourLeftImgs.forEach(img => {
        leftImgObserver.observe(img);
    });
});


// footer icon

$(document).ready(function(){
    $(".footer_snd_center a").click(function(){
        $(this).find("img").animate({ 
            marginTop: "-10px" 
        }, 200).animate({ 
            marginTop: "0px" 
        }, 200);
    });
});



