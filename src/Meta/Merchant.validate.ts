import * as Joi from 'joi';

export const ValidateCreateMerchant = Joi.object({
  code: Joi.string().min(3).max(5).required().messages({
    'string.base': 'code must be a string',
    'string.empty': 'code is required',
    'any.required': 'code is required',
    'string.max': 'code must be at most 5 characters',
    'string.min': 'code must be at least 3 characters',
  }),
  title: Joi.string().required().messages({
    'string.base': 'title must be a string',
    'string.empty': 'title is required',
    'any.required': 'title is required',
  }),
});

export const ValidateUpdateMerchant = Joi.object({
  id: Joi.number().required().messages({
    'number.base': 'id must be a number',
    'any.required': 'id is required',
  }),
  title: Joi.string().required().messages({
    'any.required': 'title is required',
    'string.empty': 'title is required',
  }),
  status: Joi.boolean().required().messages({
    'any.required': 'status is required',
  }),
  extraInfo: Joi.object().allow(),
});
