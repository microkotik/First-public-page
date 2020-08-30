jQuery (function ($) {
  $(function() {
    function maskPhone() {
      let country = $('.popup__country option:selected').val();
      switch (country) {
        case "ru":
          $(".tel-mask").mask("+7(999) 999-99-99");
          break;
        case "ua":
          $(".tel-mask").mask("+380(999) 999-99-99");
          break;
        case "by":
          $(".tel-mask").mask("+375(999) 999-99-99");
          break;
      }
    }
    maskPhone();
    $('.popup__country').change(function() {
      maskPhone();
    });
  });
});
