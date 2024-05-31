const express = require('express');
require('dotenv').config({ path: './.env' });

const server = express();
const helmet = require('helmet');
const cors = require('cors');
const router = require('./mailer/routes');

server.use(cors({ origin: '*' }));
server.use(helmet());
server.use(express.json());
server.use(router);

const port = process.env.MAIL_PORT ?? 1111;
server.listen(port, () => {
  console.log(`Sever is running on port ${port}`);
});
