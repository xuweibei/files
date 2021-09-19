const redis = require('redis');

const redisClient = redis.createClient(6379, '127.0.0.1');

redisClient.on('error', (err) => {
  console.log(err);
});

redisClient.set('lala', 'ee', redis.print);
redisClient.get('lala', (err, val) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(val);
  redisClient.quit();
});
