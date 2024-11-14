// 배너 컨텐츠 
document.addEventListener('scroll', function() {
    const contents1 = document.querySelectorAll('.banner_contents1 li');
    const contents2 = document.querySelectorAll('.banner_contents2 li');
    
    contents1.forEach((item) => {
        if (item.getBoundingClientRect().top < window.innerHeight - 50) {
            item.classList.add('visible');
        }
    });
    
    contents2.forEach((item) => {
        if (item.getBoundingClientRect().top < window.innerHeight - 50) {
            item.classList.add('visible');
        }
    });
});


// backtop
$(document).ready(function () {
    function updateSections() {
        brandVisionTop = $('#brand_vision').offset().top;
        brandVisionBottom = brandVisionTop + $('#brand_vision').outerHeight();
        ourBusinessTop = $('#our_business').offset().top;
        ourBusinessBottom = ourBusinessTop + $('#our_business').outerHeight();
    }

    var brandVisionTop, brandVisionBottom, ourBusinessTop, ourBusinessBottom;
    updateSections();

    $(window).resize(updateSections);

    $(window).on('scroll', function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();

        // 현재 위치가 brand_vision이나 our_business 구간에 있는지 확인하여 클래스 추가/제거
        if ((scrollPos + windowHeight > brandVisionTop && scrollPos < brandVisionBottom) || 
            (scrollPos + windowHeight > ourBusinessTop && scrollPos < ourBusinessBottom)) {
            $('.backtop').addClass('backtop-black'); // 검정색 클래스 추가
        } else {
            $('.backtop').removeClass('backtop-black'); // 검정색 클래스 제거
        }
    });
});
// backtop
window.addEventListener('scroll', function () {
    const backtop = document.querySelector('.backtop');
    const brandVision = document.getElementById('brand_vision');
    const ourBusiness = document.getElementById('our_business');
    
    const brandVisionTop = brandVision.offsetTop;
    const brandVisionBottom = brandVisionTop + brandVision.offsetHeight;
    const ourBusinessTop = ourBusiness.offsetTop;
    const ourBusinessBottom = ourBusinessTop + ourBusiness.offsetHeight;
    
    // 스크롤 위치가 brand_vision 또는 our_business 영역 내에 있을 때만 색상 변경
    if ((window.scrollY >= brandVisionTop && window.scrollY < brandVisionBottom) ||
        (window.scrollY >= ourBusinessTop && window.scrollY < ourBusinessBottom)) {
        backtop.classList.add('dark-backtop');
    } else {
        backtop.classList.remove('dark-backtop');
    }
});


            


// 브랜드비전
$(document).ready(function () {
    // 초기 상태를 숨김으로 설정
    $('.vision, .k_vision, .e_vision').css('opacity', 0);

    $(window).on('scroll', function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();

        $('.vision').each(function () {
            var elemPos = $(this).offset().top;
            if (scrollPos + windowHeight > elemPos + 100) {
                $(this).animate({ opacity: 1 }, 1000); // 1초 동안 페이드 인
            }
        });

        $('.k_vision').each(function () {
            var elemPos = $(this).offset().top;
            if (scrollPos + windowHeight > elemPos + 100) {
                $(this).delay(200).animate({ opacity: 1 }, 1000); // 0.2초 지연 후 페이드 인
            }
        });

        $('.e_vision').each(function () {
            var elemPos = $(this).offset().top;
            if (scrollPos + windowHeight > elemPos + 100) {
                $(this).delay(400).animate({ opacity: 1 }, 1000); // 0.4초 지연 후 페이드 인
            }
        });
    });
});


// 왓위두
$(document).ready(function () {
    let lastScrollTop = 0; // 마지막 스크롤 위치를 저장할 변수

    $(window).on('scroll', function () {
        const currentScrollTop = $(this).scrollTop(); // 현재 스크롤 위치
        const isScrollingDown = currentScrollTop > lastScrollTop; // 스크롤 방향 확인

        // 스크롤이 내려갈 때
        if (isScrollingDown) {
            $('#what_we_do .what_we_do_center img').each(function (index) {
                if ($(this).offset().top < $(window).scrollTop() + $(window).height()) {
                    setTimeout(() => $(this).addClass('visible'), index * 250); // 지연 시간 증가
                }
            });
        }
        // 스크롤이 올라갈 때
        else {
            $('#what_we_do .what_we_do_center img').each(function (index) {
                if ($(this).offset().top > $(window).scrollTop() + $(window).height() - 200) {
                    setTimeout(() => $(this).removeClass('visible'), index * 200); // 지연 시간 증가
                }
            });
        }

        lastScrollTop = currentScrollTop; // 마지막 스크롤 위치 업데이트
    });
});



// 아워서비스
$(document).ready(function () {
    $('.img-wrap').hover(
        function () {
            $(this).find('.mainimg').css('opacity', '0');
            $(this).find('.hoverimg').css('opacity', '1');
        },
        function () {
            $(this).find('.mainimg').css('opacity', '1');
            $(this).find('.hoverimg').css('opacity', '0');
        }
    );
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
