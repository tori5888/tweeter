$(document).ready(function() {
  const MAX_CHARACTERS = 140;
  const counter = $('.new-tweet .counter'); // Move the counter selection outside the event handler

  $('.new-tweet textarea[name="text"]').on('input', function() {
    const textLength = $(this).val().length;
    const remainingChars = MAX_CHARACTERS - textLength;

    counter.text(remainingChars);

    if (remainingChars < 0) {
      counter.addClass('redText');
    } else {
      counter.removeClass('redText');
    }
  });

 // Trigger the input event on page load to calculate initial character count
 $('.new-tweet textarea[name="text"]').trigger('input');

  // validation function
  $('.new-tweet form').on('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const tweetTextarea = $('.new-tweet textarea[name="text"]');
    const tweetContent = tweetTextarea.val().trim(); // Trim whitespace

    if (tweetContent === '') {
      showError('Error: Your tweet cannot be empty.');
      return; // Return early if validation fails
    }

    if (tweetContent.length > MAX_CHARACTERS) {
      showError('Error: Your tweet exceeds the maximum character limit.');
      return; // Return early if validation fails
    }

    // If validation passes, you can proceed with adding the new tweet to the page
    // and clear the textarea.
    addNewTweet(tweetContent);
    tweetTextarea.val(''); // Clear textarea

     // Reset the character counter
     counter.text(MAX_CHARACTERS).removeClass('redText');
  });

  function addNewTweet(tweetText) {
    if (!tweetText.trim()) {
      showError('Error: Your tweet cannot be empty.');
      return;
    }
    // Create a new tweet element with the desired structure
    const newTweet = $('<article class="tweet">')
      .append($('<header>')
        .append($('<div class="avatar">').append('<img src="https://i.imgur.com/73hZDYK.png" class="avatar">'))
        .append($('<div class="user-info">')
          .append('<h3 class="user-name">Your Name</h3>')
          .append('<span class="user-handle">@yourhandle</span>')
        )
      )
      .append($('<div class="tweet-content">').html($('<p>').text(tweetText)))
      .append($('<footer>')
        .append($('<span class="tweet-timestamp">').text('a few seconds ago'))
        .append($('<div class="tweet-actions">').append('<i class="far fa-flag"></i><i class="fas fa-retweet"></i><i class="far fa-heart"></i>'))
      );

    $('.tweets-container').prepend(newTweet);

    // If validation passes, hide the error message element (if visible)
    hideError();
  }

  function showError(message) {
    const errorMessageElement = $('.error-message');
    errorMessageElement.text(message);
    errorMessageElement.slideDown();
  }

  function hideError() {
    const errorMessageElement = $('.error-message');
    errorMessageElement.slideUp();
  }
});
