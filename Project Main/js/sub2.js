// 타이핑 텍스트

$(document).ready(function() {
    let text1 = "WHAT";
    let text2 = "WE DID";
    
    function typeText(selector, text, callback) {
        let index = 0;
        function type() {
            if (index < text.length) {
                $(selector).append(text[index]);
                index++;
                setTimeout(type, 100);
            } else if (callback) {
                callback();
            }
        }
        type();
    }

    // 첫 번째 텍스트 애니메이션
    typeText(".h1_what span", text1);

    // 두 번째 텍스트 애니메이션 후 마지막 점 '.'을 1초 뒤에 추가
    setTimeout(function() { 
        typeText(".h1_wedid span", text2, function() {
            setTimeout(function() {
                $(".h1_wedid span").append(".");
            }, 1000); // 1초 뒤에 점 추가
        }); 
    }, 600);
});




// 메인 콘텐츠 

$(window).on("scroll", function () {
    $(".cont_first, .cont_second, .cont_third, .cont_fourth").each(function () {
        var elemPos = $(this).offset().top;
        var scrollPos = $(window).scrollTop() + $(window).height();
        if (scrollPos > elemPos + 100) {
            $(this).addClass("visible");
        }
    });
});

// // 파도효과

$(window).on("scroll", function () {
    $(".cont_first li, .cont_second li, .cont_third li, .cont_fourth li").each(function (index) {
        var scrollPos = $(window).scrollTop();
        $(this).css("transform", `translateX(${Math.sin(scrollPos / 100 + index) * 10}px)`);
    });
});

