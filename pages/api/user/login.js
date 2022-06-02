import { withIronSessionApiRoute } from "iron-session/next";
import createHandler from "../../../lib/middleWares/nextConnect";
import validate from "../../../lib/middleWares/validation";
import { LoginUser } from "../../../modules/user/user.service";
import { ironConfig } from "../../../lib/middleWares/ironSession";
import { loginSchema } from "../../../modules/user/user.schema";

const handler = createHandler();
handler.post(validate({ body: loginSchema }), async (req, res) => {
  try {
    const user = await LoginUser(req.body);
    req.session.user = {
      id: user.id,
      user: user.user,
    };
    await req.session.save();
    res.send({ ok: true });
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

export default withIronSessionApiRoute(handler, ironConfig);
