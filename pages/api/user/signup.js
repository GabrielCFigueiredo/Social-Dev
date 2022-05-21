import { SignupUser } from "../../../modules/user/user.service"

export default function Signup(req, res) {
    SignupUser()
    res.status(200).json({teste: "ok"})
}