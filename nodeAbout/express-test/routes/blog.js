const express = require('express');
const router = express.Router();
const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
} = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');
const loginCheck = require('../middleware/resModel');

router.get('/list', (req, res, next) => {
  let { author = '', keyword = '' } = req.query;
  const dataResult = getList(author, keyword);
  if (req.query.isadmin) {
    if (!req.session.username) {
      return res.json(new ErrorModel('未登录'));
    }
  }
  return dataResult.then((dataList) => {
    res.json(new SuccessModel(dataList));
  });
});

router.get('/detail', (req, res, next) => {
  const data = getDetail(req.query.id);
  return data.then((end) => {
    res.json(new SuccessModel(end));
  });
});

router.post('/new', loginCheck, (req, res, next) => {
  const dataResult = newBlog(req.body);
  return dataResult.then((data) => {
    return res.json(
      data ? new SuccessModel(data) : new ErrorModel('add error')
    );
  });
});

module.exports = router;
