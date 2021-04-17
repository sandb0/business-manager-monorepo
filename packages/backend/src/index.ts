import express from 'express';

import { companyRouter } from './routes';

const application = express();

application.use(express.json());

application.use('/companies', companyRouter);

application.listen(8080, () => {
  console.log('Express application listening on port 8080');
});
