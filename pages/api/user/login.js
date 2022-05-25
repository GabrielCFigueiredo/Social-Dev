import Joi from "joi";
import createHandler from "../../../lib/middleWares/nextConnect";
import validate from "../../../lib/middleWares/validation";
import { login } from "../../../modules/user/user.service";

const loginSchema = Joi.object({
  userOrEmail: Joi.string().required(),
  password: Joi.string().required(),
});

const handler = createHandler().post(
  validate({ body: loginSchema }),
  async (req, res) => {
    try {
      const user = await login(req.body);
      res.send(user);
    } catch (error) {
      throw error;
    }
  }
);

export default handler;
