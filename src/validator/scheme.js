import Joi from 'joi';

export const UrlPayloadSchema = Joi.object({
    originalUrl : Joi.string().required()
})