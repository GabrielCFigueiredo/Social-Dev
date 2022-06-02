import { withIronSessionApiRoute } from "iron-session/next";
import validate from "../../../lib/middleWares/validation";
import CreateHandler from "../../../lib/middleWares/nextConnect";
import { SignupUser } from "../../../modules/user/user.service";
import { ironConfig } from "../../../lib/middleWares/ironSession";
import { signupSchema } from "../../../modules/user/user.schema";


const signup = CreateHandler()
 signup.post(
  validate({ body: signupSchema }),
  async (req, res) => {
    try {
      const user = await SignupUser(req.body);
      req.session.user = {
        id: user._id,
        user: user.user,
      };
      await req.session.save();
      res.status(201).json({ ok: true });
    } catch (error) {
      console.log(error);
      if (error.code === 11000) {
        return res.status(400).send({
          code: 11000,
          duplicatedKey: Object.keys(error.keyPattern)[0],
        })
        
      }
      
      throw error;
    }
  }
);

export default withIronSessionApiRoute(signup, ironConfig);
