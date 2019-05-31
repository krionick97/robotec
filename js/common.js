$(document).ready(function () {

  // Slow loading of the page
  $('.bg_container').animate({opacity: '1'}, 1500);

  //----------------------------------------------
  // Third block trainer slider
  // $('.third_block__slider').slick({
  //   dots: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   // nextArrow: '<div class="arrow arrow_prev arrow_1 arrow_prev_1"></div>',
  //   // prevArrow: '<div class="arrow arrow_next arrow_1 arrow_next_1"></div>',
  //   dotsClass: 'dots dots1',
  //   responsive: [
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       }
  //     },
  //     // {
  //     //   breakpoint: 995,
  //     //   settings: {
  //     //     slidesToShow: 1,
  //     //     slidesToScroll: 1,
  //     //   }
  //     // }
  //   ]
  // });

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