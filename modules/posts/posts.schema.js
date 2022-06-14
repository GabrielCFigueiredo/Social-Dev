import Joi from "joi";
import joiObjectid from "joi-objectid";

Joi.objectId = joiObjectid(Joi);

export const createSchema = Joi.object({
  text: Joi.string().required().max(256),
});

export const deleteSchema = Joi.object({
  id: Joi.objectId().required(),
});
