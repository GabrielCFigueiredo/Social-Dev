import Joi from "joi"
import connect from "next-connect"
import validate from "../../../lib/midlleWares/validation"
import { SignupUser } from "../../../modules/user/user.service"


const postSchema = Joi.object({
    firstName: Joi.string().required().max(50),
    lastName: Joi.string().required().max(50),
    user: Joi.string().required().max(30),
    email: Joi.string().email().required().max(100),
    password: Joi.string().required().max(50).min(6)
})
const Signup = connect()
Signup.post(validate({ body: postSchema }),(req, res) => {

    SignupUser(req.body)
    res.status(200).json({teste: "ok"})
})

export default Signup