import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const bp = require('body-parser');

const app = express();

app.use(bp.text());
app.use(bp.urlencoded({ extended: true }));

app.use(cors());

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Hello World!');
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
