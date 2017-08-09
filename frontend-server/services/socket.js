var socketio = require('socket.io');

module.exports = initSockets;

function initSockets(server, client) {
  var io = socketio.listen(server);

  client.on("message", function(channel, message) {
    console.log(channel + " ---> " + message);
    var sentiment = Math.random() >= 0.5 ? 'positive' : 'negative';
    io.emit('tweet_sentiment', {sentiment});
  })

  var handler = io.on('connection', function(socket) {

    console.log("connected xxx");
    // socket.emit('tweet_sentiment', {data: "testing xxxx"});

    socket.on('disconnect', function() {
      console.log("user disconnected");
    });

  })

};
