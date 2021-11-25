const http = require('http');
const slice = Array.prototype.slice;

class Like {
  constructor() {
    this.routers = {
      all: [],
      get: [],
      post: [],
    };
  }

  register(path) {
    const info = {};
    if (typeof path === 'string') {
      info.path = path;
      info.stack = slice.call(arguments, 1);
    } else {
      info.path = '/';
      info.stack = slice.call(arguments, 0);
    }
    return info;
  }

  use() {
    const info = this.register.apply(this, arguments);
    this.routers.all.push(info);
  }

  get() {
    const info = this.register.apply(this, arguments);
    this.routers.get.push(info);
  }

  post() {
    const info = this.register.apply(this, arguments);
    this.routers.post.push(info);
  }

  match(method, url) {
    let stack = [];
    if (url === '/favicon.ico') {
      return stack;
    }

    let curRouter = [];
    curRouter = curRouter.concat(this.routers.all);
    curRouter = curRouter.concat(this.routers[method]);
    curRouter.forEach((item) => {
      if (url.indexOf(item.path) === 0) {
        stack = stack.concat(item.stack);
      }
    });
    return stack;
  }

  handle(req, res, stack) {
    const next = () => {
      const middleware = stack.shift();
      if (middleware) {
        middleware(req, res, next);
      }
    };
    next();
  }

  callBack() {
    return (req, res) => {
      res.json = (data) => {
        res.setHeader('Content-type', 'application/json');
        res.end(JSON.stringify(data));
      };
      const url = req.url;
      const method = req.method.toLowerCase();
      const resultList = this.match(method, url);
      this.handle(req, res, resultList);
    };
  }

  listen(...args) {
    const server = http.createServer(this.callBack());
    server.listen(...args);
  }
}

module.exports = Like;
