import Joi from "joi";
import createHandler from "../../../lib/middleWares/nextConnect";
import validate from "../../../lib/middleWares/validation";
import { SignupUser } from "../../../modules/user/user.service";

const postSchema = Joi.object({
  firstName: Joi.string().required().max(50),
  lastName: Joi.string().required().max(50),
  user: Joi.string().required().max(30),
  email: Joi.string().email().required().max(100),
  password: Joi.string().required().max(50).min(6),
});
const signup = createHandler().post(
  validate({ body: postSchema }),
  async (req, res) => {
    try {
      const user = await SignupUser(req.body);
      res.status(201).json({ user });
    } catch (error) {
      throw error;
    }
  }
);

export default signup;
