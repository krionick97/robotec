$(document).ready(function () {

  // Slow loading of the page
  $('.bg_container').animate({opacity: '1'}, 1500);
  //----------------------------------------------------

  //Header menu responsice
 // Header menu toggled by burger
  $('#header_burger').click(function() { 
    $('.header__menu_list').toggleClass('responsive');
    $('#header_burger span').toggleClass('active');
  });

  // Header menu close by clicking outside
  $(document).mouseup(function (e) { // by the click out of popup 
    let menu = $('.header__menu');
    if ($('.header__menu_list').hasClass('responsive') && e.target != menu[0] && menu.has(e.target).length == 0) {
      $('.header__menu_list').removeClass('responsive');
      $('#header_burger span').removeClass('active');
    }
  });
  //------------------------------------------------------------------------------------------------------------------

  //----------------------------------------------
  // Reviews slider
  var $status = $('.reviews__pagingInfo');
  var $count = $('.reviews__count');
  var $slickElement = $('.reviews__slider');

  $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i);
    $count.text('/' + slick.slideCount);
  });

  $slickElement.slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<div class="arrow arrow_next"></div>',
    prevArrow: '<div class="arrow arrow_prev"></div>',
    // dotsClass: 'dots',
  });

  //-----------------------------------------------
  // Fourth block auto slider
  // $('.fourth_block__slider').slick({
  //   dots: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   nextArrow: '<div class="arrow arrow_prev"></div>',
  //   prevArrow: '<div class="arrow arrow_next"></div>',
  //   dotsClass: 'dots dots2',
  //   responsive: [
  //     {
  //       breakpoint: 1250,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       }
  //     },
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       }
  //     },
  //   ]
  // });

  //------------------------------------------------
  // Checking on empty filled inputs and Ajax send
  // $('#form').submit(function() { 
  //   if($('#name').val() == '' || $('#tel').val() == '') {
  //     return false;
  //   }
  //   $.ajax({
  //     type: "POST",
  //     url: "mail/mail.php",
  //     data: $(this).serialize()
  //   }).done(function() {
  //     // $('.popup').css('display', 'block').fadeIn();
  //     $('.popup').fadeIn();
  //     $(this).find('input').val('');
  //     $('#form').trigger('reset');
  //   });
  //   return false;
  // });

  //------------------------------------------------
  // Close popup
  // $('.popup__close').click(function() { 
  //   // $('.popup').css('display', 'none').fadeOut();
  //   $('.popup').fadeOut();
  // });
  // $(document).mouseup(function (e) { // by the click out of popup 
  //   let popup = $('.popup');
  //   if (e.target != popup[0] && popup.has(e.target).length == 0) {
  //     // $('.popup').css('display', 'none').fadeOut();
  //     $('.popup').fadeOut();
  //   }
  // });

  // //-----------------------------------------------
  // // Mask of the phone
  // $(function($) {
  //   $('[name="tel"]').mask("+7 (999) 999-99-99");
  // });


});