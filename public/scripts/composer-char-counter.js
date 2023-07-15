$(document).ready(function() {
  $(document).ready(function() {
    $('textarea[name="text"]').on('input', function() {
      const textLength = $(this).val().length;
      const counter = $(this).siblings('.counter');
      const remainingChars = 140 - textLength;

      counter.text(remainingChars);

    });
  });

});