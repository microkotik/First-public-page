$(document).ready(function () {

  $('#burger__toggle').click(function (event) {
    $('html, body').toggleClass("scrollOff");
    $("body").toggleClass("fixed");
  });


  $('.burger__item').click(function (event) {
    $('html, body').removeClass('scrollOff');
    $('.burger__toggle').prop('checked', false);
    $("body").removeClass("fixed");

  });


  $('button.btn-order-call').click(function () {
        $('div.'+$(this).attr("rel")).fadeIn(500);
        $('body').append("<div class='overlay'></div>");
        $('.overlay').show();
    $('html, body').addClass('scrollOff');
    // $("body").addClass("fixed");
    return false;
  });

  $('a.popup__close').click(function () {
        $(this).parent().fadeOut(100);
        $('.overlay').remove(".overlay");
    $('html, body').removeClass('scrollOff');
    // $("body").removeClass("fixed");
    return false;
  });

  $(document).mouseup(function (e){ // событие клика по веб-документу
    let div = $(".popup"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.hide(); // скрываем его
      $('.overlay').remove('.overlay'); // удаляем темный фон
      $('html, body').removeClass('scrollOff');
      // $("body").removeClass("fixed");
    }
  });
  return false;
});

