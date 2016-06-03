
$('.main-header__menu-xs').on("click",function(){
  $('.menu__small').toggleClass('hidden-xs');
    if ($('.menu__small').hasClass('hidden-xs')) {
    } else {
      $('.menu__small').removeClass('main_disable');
      $('.menu__small').addClass('main_enable');
    }
})
