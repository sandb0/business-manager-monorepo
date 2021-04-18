import express from 'express';

import { companyController } from './core';

export const companyRouter = express.Router();

/** Create a new Company endpoint */
companyRouter.post('/', async (request, response) => {
  const requestData = {
    ...(request.body || {}),
  };

  const {
    statusCode,
    response: controllerResponse,
  } = await companyController.save(requestData);

  return response.status(statusCode).json(controllerResponse);
});
