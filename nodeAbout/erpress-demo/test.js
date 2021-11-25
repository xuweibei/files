const expressOne = require('./index');
const app = new expressOne();

app.use((req, res, next) => {
  console.log(111);
  // next();
});

app.get('/list', (req, res, next) => {
  res.json({ data: 123 });
  next();
});

app.listen(3002, () => {
  console.log('open');
});
