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

    /* 회원가입 */
    $('.toggle-pw').click(function(){
      // 아이콘 모양 변경
      $(this).toggleClass('bi-eye')
      // 인풋타입 변경
      var inputType = $(this).parent().children('input').attr('type');
      if(inputType == 'password'){
        $(this).parent().children('input').attr('type','text');
      } else {
        $(this).parent().children('input').attr('type','password');
      }
    })

    /* 로그인 버튼 눌렀을 때 모달 */
    $('.btn-login, .login-member a').click(function(){
      $('.member-login-overlay').fadeIn();
      $('body').addClass('active');
    }) 
    $('.member-login .btn-modal-close').click(function(){
      $('.member-login-overlay').fadeOut();
      $('body').removeClass('active');
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

  /* 수강신청 장바구니 체크 */
  
  $('.cart-item .btn-clear').click(function(){
    // $(this).parent().parent().parent().fadeOut();
    $(this).parents('.cart-item').hide(100);
  })
  $('.cart-wrap .btn-all-clear').click(function(){
    $('.cart-item').hide();
  })
  $('.cart-chk-all').click(function(){
    $('.check-status .cart-chk').prop('checked', this.checked)
    // attr('속성명') getter
    // attr('속성명', '값') setter
  })

  /* 공유하기 링크 */
  $('.btn-sidebar-badge.share').click(function(){
    $('.class-share-overlay').fadeIn();
    $('body').addClass('active'); // 스크롤 안되게
  })
  $('.class-share .btn-modal-close').click(function(){
    $('.class-share-overlay').fadeOut();
    $('body').removeClass('active');
  });
  $('.share-link').click(function(){
    $('.copied-link').show().delay(1000).fadeOut();
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