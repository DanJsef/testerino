import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const bp = require('body-parser');

const app = express();

app.use(bp.text());
app.use(bp.urlencoded({ extended: true }));

app.use(cors());

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/', upload.single("file"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.send('Hello World!');
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
