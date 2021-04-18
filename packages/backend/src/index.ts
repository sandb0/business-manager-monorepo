import express from 'express';

import typeORMConnection from './libs/TypeORM';
import { companyRouter } from './routes';
import { applicationPort } from './configs/app';

const application = express();

/** Enable JSON bodies */
application.use(express.json());

/** Use routers */
application.use('/companies', companyRouter);

/** Application bootstrap */
typeORMConnection
  .then(() => {
    application.listen(applicationPort, () => {
      console.log(`Express Application listening on port ${applicationPort}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
