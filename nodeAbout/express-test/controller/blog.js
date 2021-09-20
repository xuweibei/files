const { exec, postMethod } = require('../db/mysql');
const xss = require('xss');

const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `;
  if (author) {
    sql += `and author='${author}' `;
  }
  if (keyword) {
    sql += `and title like '%${keyword}%'`;
  }
  // sql += `order by creatertime desc;`;

  return exec(sql);
};

const getDetail = (id) => {
  const sql = `select * from blogs where id=${id}`;
  return exec(sql);
};

const newBlog = (data) => {
  const sql = `INSERT into blogs(title,content,createtime,author)VALUES('${xss(
    data.title
  )}','${data.content}','${new Date().getTime()}','${data.author}')`;
  return exec(sql).then((result) => {
    return result.affectedRows === 1;
  });
};

const updateBlog = (id, data) => {
  const sql = `update blogs set title='${data.title}', content='${data.content}' where id=${data.id}`;
  return exec(sql).then((result) => {
    return result.affectedRows === 1;
  });
};

const delBlog = (id, data) => {
  const sql = `delete from blogs where id=${id} and author='${data.author}'`;
  return exec(sql).then((data) => {
    return data.affectedRows === 1;
  });
};
module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
};
