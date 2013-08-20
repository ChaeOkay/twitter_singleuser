$(document).ready(function() {

  $('#show_tweets').on('submit', function(e){
    e.preventDefault();
    $('div.tweets').html('<img src="spinner.gif">')
    var username = $(this).serialize();

    $.ajax({
      url:  this.action,
      type: this.method,
      data: username
    }).done(function(data){
      $('div.tweets').html(data);
    });
  });


  $('#make_tweet').on('submit', function(e){
    e.preventDefault();
    var tweetMsg = $(this).serialize();
    console.log(tweetMsg);

    $.ajax({
      url: this.action,
      type: this.method,
      data: tweetMsg
    }).done(function(data){
      $('div.posted_tweet').html(data);
    });
  });

});
