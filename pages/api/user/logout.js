import { withIronSessionApiRoute } from "iron-session/next";
import { ironConfig } from "../../../lib/middleWares/ironSession";
import createHandler from "../../../lib/middleWares/nextConnect"
const logout = createHandler()
.post( async(req, res) =>{
req.session.destroy()
res.send({ ok: true })
})
export default withIronSessionApiRoute(logout, ironConfig)