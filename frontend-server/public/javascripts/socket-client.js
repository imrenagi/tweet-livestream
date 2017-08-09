$(function() {

  var socket = io();

  var total = 0;
  var positive = 0;
  var negative = 0;

  socket.on('tweet_sentiment', function(data) {

    if (data.sentiment === 'positive') {
      positive++;
    } else {
      negative++;
    }

    total = positive + negative;

    $("#total-tweets").text(" " + total);
    $("#positive-tweets").text(" " + positive);
    $("#negative-tweets").text(" " + negative);

    console.log(data);
  })

})
