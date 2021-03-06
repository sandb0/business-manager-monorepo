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

/** Get all Companies endpoint */
companyRouter.get('/', async (request, response) => {
  const requestData = {
    searchTerm: request.query.searchTerm?.toString() || '',
    page: parseInt(request.query.page?.toString() || '0'),
    size: parseInt(request.query.size?.toString() || '0'),
  };

  const {
    statusCode,
    response: controllerResponse,
  } = await companyController.findAll(requestData);

  return response.status(statusCode).json(controllerResponse);
});

/** Get a Company By Id endpoint */
companyRouter.get('/:companyId', async (request, response) => {
  const { companyId } = request.params;

  const {
    statusCode,
    response: controllerResponse,
  } = await companyController.findById(companyId);

  return response.status(statusCode).json(controllerResponse);
});

/** Update a Company endpoint */
companyRouter.put('/:companyId', async (request, response) => {
  const requestData = {
    ...(request.body || {}),
    id: request.params.companyId,
  };

  const {
    statusCode,
    response: controllerResponse,
  } = await companyController.save(requestData);

  return response.status(statusCode).json(controllerResponse);
});

/** Update a Company endpoint */
companyRouter.delete('/:companyId', async (request, response) => {
  const { companyId } = request.params;

  const {
    statusCode,
    response: controllerResponse,
  } = await companyController.delete(companyId);

  return response.status(statusCode).json(controllerResponse);
});
