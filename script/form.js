$(document).ready(function () {


  $('.popup__form').submit(function (event) {
    event.preventDefault();

    let $form = $(this);


    $.post(
      $form.attr("action"),
      $form.serialize()
    ).done(function () {
      $form.trigger("reset");

      $('.popup__form').hide();
      $('.popup__thanks').show();

      function clearPopup() {
        $('.popup').fadeOut(100);
        $('.overlay').remove('.overlay'); //
        $('html, body').removeClass('scrollOff');
        $("body").removeClass("fixed");
        console.log("hi");
      }
      setTimeout(clearPopup, 3000);
    });

    return false;


  });

  $('.popup__thanks').hide();


});