const crypto = require('crypto');

const key = 'WJoil_877#'; //密匙
function md5(data) {
  let md5 = crypto.createHash('md5');
  return md5.update(data).digest('hex');
}

function genPassword(password) {
  const str = `password=${password}&key=${key}`;
  return md5(str);
}
console.log(genPassword(123));
