/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Fake data taken from initial-tweets.json

$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  // Function to render tweets
  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('.tweets-container').append($tweet);
    }
  };

  // Function to create tweet HTML structure (should look similar to hardcoded one originally)
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
          <span class="timestamp">${tweet.created_at}</span>
        </footer>
      </article>
    `);
    return $tweet;
  };


  $('form').submit(function(event) {
    event.preventDefault();

    const formData = $(this).serialize();

    $.ajax({
      url: '/tweets',
      type: 'POST',
      data: formData,
      success: function(response) {
        console.log(response);
      },
      error: function(error) {
        console.error(error);
      }
    });
  });



  renderTweets(data);
});


