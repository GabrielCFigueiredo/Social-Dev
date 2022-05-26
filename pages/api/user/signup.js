import { withIronSessionApiRoute } from "iron-session/next";
import createHandler from "../../../lib/middleWares/nextConnect";
import validate from "../../../lib/middleWares/validation";
import { SignupUser } from "../../../modules/user/user.service";
import { ironConfig } from "../../../lib/middleWares/ironSession";
import { signupSchema } from "../../../modules/user/user.schema";

const signup = createHandler().post(
  validate({ body: signupSchema }),
  async (req, res) => {
    try {
      const user = await SignupUser(req.body);
      req.session.user = {
        id: user.id,
        user: user.user,
      };
      res.status(201).json({ ok: true });
    } catch (error) {
      throw error;
    }
  }
);

export default withIronSessionApiRoute(signup, ironConfig);
