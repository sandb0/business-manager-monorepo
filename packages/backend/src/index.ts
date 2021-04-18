import express from 'express';
import typeORMConnection from './libs/TypeORM';

import { companyRouter } from './routes';

const applicationPort = process.env.APP_PORT || 8080;

const application = express();

application.use(express.json());

application.use('/companies', companyRouter);

typeORMConnection
  .then(() => {
    application.listen(applicationPort, () => {
      console.log(`Express Application listening on port ${applicationPort}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
