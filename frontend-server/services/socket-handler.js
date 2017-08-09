
exports.onListening = function(socket) {

  console.log("connected");
  socket.emit('tweet_sentiment', {data: "testing xxxx"});

  socket.on('disconnect', function() {
    console.log("imrenagi");
  });

}
