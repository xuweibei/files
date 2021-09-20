const express = require('express');
const router = express.Router();
const { login } = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel');

router.post('/login', (req, res, next) => {
  const { password, username } = req.body;
  // const { password, username } = req.query;
  const dataResult = login(username, password);
  return dataResult.then((data) => {
    if (data.username) {
      req.session.username = data.username;
      req.session.realname = data.realname;
      // redisSet(req.sessionId, req.session);
      res.json(new SuccessModel());
      return;
    }
    return res.json(new ErrorModel('登录失败'));
  });
  // const { username, password } = req.body;
  // res.json({
  //   error: 0,
  //   data: {
  //     username,
  //     password,
  //   },
  // });
});

router.get('/login-test', (req, res, next) => {
  if (req.session.username) {
    res.json({
      error: 0,
      message: '成功',
    });
  } else {
    res.json({
      error: -1,
      message: '失败',
      haha: 123,
    });
  }
});

// router.get('/session-get', (req, res, next) => {
//   const session = req.session;
//   if (session.viewNum === null) {
//     session.viewNum = 0;
//   }
//   session.viewNum++;
//   res.json({ viewNum: session.viewNum });
// });
module.exports = router;
