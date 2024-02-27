// full_server/server.js

import express from 'express';
import router from './routes';
import { readDatabase } from './utils';

const app = express();

app.use(express.json());

app.locals.dbFilePath = process.argv[2];

app.use('/', router);

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
