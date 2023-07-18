$(document).ready(function() {
  const MAX_CHARACTERS = 140;


  $('.new-tweet textarea[name="text"]').on('input', function() {
    const textLength = $(this).val().length;
    const counter = $(this).siblings('.counter');
    const remainingChars = MAX_CHARACTERS - textLength;

    counter.text(remainingChars);

    if (remainingChars < 0) {
      counter.addClass('redText');
    } else {
      counter.removeClass('redText');
    }
  });

  $('.new-tweet form').on('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const tweetTextarea = $('.new-tweet textarea[name="text"]');
    const tweetContent = tweetTextarea.val().trim(); // Trim whitespace

    if (tweetContent === '') {
      alert('Error: Your tweet cannot be empty.');
    } else if (tweetContent.length > MAX_CHARACTERS) {
      alert('Error: Your tweet exceeds the maximum character limit.');
    } else {
      // If validation passes, you can proceed with sending the form data to the server.
      // log success message and clear the textarea.
      console.log('Tweet sent successfully:', tweetContent);
      tweetTextarea.val(''); // Clear textarea
    }
  });
});
