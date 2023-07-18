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
    // Create a new tweet element with the desired structure
    const newTweet = $('<article class="tweet">')
      .append($('<header>')
      .append($('<div class="avatar">').append('<img src="https://i.imgur.com/73hZDYK.png" class="avatar">'))
        .append($('<div class="user-info">')
          .append('<h3 class="user-name">Your Name</h3>')
          .append('<span class="user-handle">@yourhandle</span>')
        )
      )
      .append($('<div class="tweet-content">').text($('<p>').text(tweetText)))
      .append($('<footer>')
        .append($('<span class="tweet-timestamp">').text('a few seconds ago'))
        .append($('<div class="tweet-actions">').append('<i class="far fa-flag"></i><i class="fas fa-retweet"></i><i class="far fa-heart"></i>'))
      );

    $('.tweets-container').prepend(newTweet);
  }
});
