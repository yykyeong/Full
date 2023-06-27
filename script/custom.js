$(function(){

  /* Include Files */
  $('.header-include').load('/include/header.html', function(){

    /* Mega Navigation */
    $('.trigger').click(function(){
      $('.mega-navi').stop().slideToggle()
    })
    $('section').click(function(){
      $('.mega-navi').stop().slideUp()
    })
  });
  $('.footer-include').load('/include/footer.html');


  /* Scroll Header Fixed */
  $(window).scroll(function(){
    if($(this).scrollTop() > 200) {
      $('header').addClass('active')
    } else {
      $('header').removeClass('active')
    }
  })

  /* Countdown*/
  $("#early-bird-countdown")
  .countdown("2023/11/01", function(event) {
    $(this).html(
      event.strftime('<b>종료까지</b> %D일 <em>%H</em>:<em>%M</em>:<em>%S</em> 남음')
    );
  });

  /* Focus Class */
  $('.like').click(function(){
    $(this).toggleClass('active')
  })

  /* Category Detail Buttons */
  $('.btn-shortcut').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });

  /* Front Slider */
  $('.front-slider-items').slick({
    infinite: true, // 마지막 슬라이드 다음에 처음으로 돌아가기
    arrows: false, // 다음 이전 버튼
    dots: false, // 동그라미 도트 버튼
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 슬라이드가 머무는 시간
    fade: false, // 크로스페이드로 할지 여부
    speed: 300, // 슬라이드 교차하는 시간
    pauseOnHover: true // 마우스 올라갔을 때 잠시 멈춤
  });

  /* Focus Class Slider */
  $('.focus-class-items').slick({
    slidesToShow: 4, // 최초에 보이는 개수
    slidesToScroll: 2, // 슬라이드할 때 몇개씩 슬라이드할지 개수
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: false,
          arrows: false
        }
      }
    ]
  });

});