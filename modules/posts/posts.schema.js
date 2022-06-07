import Joi from "joi";

export const createSchema = Joi.object({
text: Joi.string().required().max(256)
})