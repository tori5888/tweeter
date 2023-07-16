/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Fake data taken from initial-tweets.json

$(document).ready(function() {
  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('.tweets-container').append($tweet);
    }
  };

  const createTweetElement = function(tweet) {
    const $tweet = $(`
      <article class="tweet">
        <header>
          <img src="${tweet.user.avatars}" class="avatar">
          <span class="username">${tweet.user.name}</span>
          <span class="handle">${tweet.user.handle}</span>
        </header>
        <p class="content">${tweet.content.text}</p>
        <footer>
          <span class="timestamp">${timeago.format(tweet.created_at)}</span>
        </footer>
      </article>
    `);
    return $tweet;
  };


  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      type: 'GET',
      success: function(tweets) {
        renderTweets(tweets);
      },
      error: function(error) {
        console.error(error);
      }
    });
  };

  $('form').submit(function(event) {
    event.preventDefault();

    const formData = $(this).serialize();

    console.log(formData); // Log the form data to the console

    $.ajax({
      url: '/tweets',
      type: 'POST',
      data: formData,
      success: function(response) {
        console.log(response);
        // After successful submission, reload the tweets
        loadTweets();
      },
      error: function(error) {
        console.error(error);
      }
    });
  });

  // Load the tweets on initial page load
  loadTweets();
});
