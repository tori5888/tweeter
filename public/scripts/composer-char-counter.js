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



  // validation function
  $('.new-tweet form').on('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const tweetTextarea = $('.new-tweet textarea[name="text"]');
    const tweetContent = tweetTextarea.val().trim(); // Trim whitespace

    if (tweetContent === '') {
      alert('Error: Your tweet cannot be empty.');
      return; // Return early if validation fails
    }

    if (tweetContent.length > MAX_CHARACTERS) {
      alert('Error: Your tweet exceeds the maximum character limit.');
      return; // Return early if validation fails
    }

    // If validation passes, you can proceed with adding the new tweet to the page
    // and clear the textarea.
    addNewTweet(tweetContent);
    tweetTextarea.val(''); // Clear textarea
  });

  function addNewTweet(tweetText) {
    const newTweet = $('<div class="tweet">').text(tweetText);
    $('.tweets-container').prepend(newTweet);
  }
});
