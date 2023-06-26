//메인메뉴의 움직이는 바

$(".gnb li a").mouseenter(function () {
  let bar = $(this).position().left;
  console.log(bar);
  let widNum = $(this).width();
  //$(".bar").animate({실행문}시간)
  $(".bar").animate(
    {
      left: bar + "px",
      width: widNum + "px",
      opacity: 1,
    },
    300
  );
});
$(".gnb").mouseleave(function () {
  $(".bar").animate(
    {
      left: 0,
      width: 0,
      opacity: 0,
    },
    10
  );
});

//img sroll animate
$(".animate").scrolla({
  // default
  mobile: true, // 모다일 버전에서 활성화
  once: false, // 스크롤시 한번(true)할껀지 여러번실행(false)할지
  animateCssVersion: 4, // version (3 or 4)
});

/* menuOpen */
//$('.menuOpen open').on('click',function(){})
$(".menuOpen .open").click(function (e) {
  e.preventDefault();
  $(".menuOpen .menuWrap").addClass("on");
});
$(".menuWrap .close").click(function (e) {
  e.preventDefault();
  $(".menuOpen .menuWrap").removeClass("on");
});

$(".menuWrap ul li").click(function (e) {
  e.preventDefault();
  $(".menuOpen .menuWrap").removeClass("on");
});

//background color 변경
$(window).scroll(function () {
  //$(this)는 window
  let scrollTop = $(this).scrollTop();
  console.log(scrollTop);
  let offset = $(".service").offset().top; //서비스영역전까지의 높이값
  if (scrollTop > offset - 400) {
    $("body").addClass("on");
  } else {
    $("body").removeClass("on");
  }
});
