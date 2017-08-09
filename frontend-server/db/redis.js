var redis = require('redis');

var client = redis.createClient('6379', 'redis', {no_ready_check: true});

client.on('connect', function() {
   console.log('Connected to Redis');
});

// client.on("message", function(channel, message) {
//   console.log(channel + " ---> " + message);
// })

client.subscribe("tweet");

module.exports = client;
