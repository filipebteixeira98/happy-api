import express from 'express';

import './database/connection';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.send();
});

app.listen(3333, () => {
  console.log('🚀 Server is running at http://localhost:3333');
});
