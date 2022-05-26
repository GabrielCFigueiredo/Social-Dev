import Joi from "joi";
import { withIronSessionApiRoute } from "iron-session/next";
import createHandler from "../../../lib/middleWares/nextConnect";
import validate from "../../../lib/middleWares/validation";
import { login } from "../../../modules/user/user.service";
import { ironConfig } from "../../../lib/middleWares/ironSession";

const loginSchema = Joi.object({
  userOrEmail: Joi.string().required(),
  password: Joi.string().required(),
});

const handler = createHandler().post(
  validate({ body: loginSchema }),
  async (req, res) => {
    try {
      const user = await login(req.body);
      req.session.user = {
        id: user.id,
        user: user.user,
      };
      await req.session.save();
      res.send({ ok: true });
    } catch (error) {
      throw error;
    }
  }
);

export default withIronSessionApiRoute(handler, ironConfig);
