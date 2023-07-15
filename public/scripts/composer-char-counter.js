$(document).ready(function() {
  $('.new-tweet textarea[name="text"]').on('input', function() {
    const textLength = $(this).val().length;
    const counter = $(this).siblings('.counter');
    const remainingChars = 140 - textLength;

    counter.text(remainingChars);

    if (remainingChars < 0) {
      counter.addClass('redText');
    } else {
      counter.removeClass('redText');
    }
  });
});
