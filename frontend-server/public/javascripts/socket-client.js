$(function() {

  var socket = io();

  var total = 0;
  var positive = 0;
  var negative = 0;
  var neutral = 0;

  socket.on('tweet_sentiment', function(data) {

    if (data.sentiment === 'positive') {
      positive++;
    } else if (data.sentiment === 'negative') {
      negative++;
    } else {
      neutral++;
    }

    total = positive + negative + neutral;

    $("#total-tweets").text(" " + total);
    $("#positive-tweets").text(" " + positive);
    $("#negative-tweets").text(" " + negative);
    $("#neutral-tweets").text(" " + neutral);

    console.log(data);
  })

})
