import { comparePassword, hashPassword } from "../../utils/bcrypt";
import User from "./user.model";

export const SignupUser = async (body) => {
  try {
    const user = {
      ...body,
      password: hashPassword(body.password),
    };
    const dbUser = await User.create(user);
    return dbUser;
  } catch (error) {
    throw error;
  }
};

export const LoginUser = async (body) => {
  try {
    const user = await User.findOne({
      $or: [{ email: body.userOrEmail }, { user: body.userOrEmail }],
    });
    if (!user) throw new Error("user ou email not found");
    const passwordIsCorrect = comparePassword(body.password, user.password);
    if (!passwordIsCorrect) throw new Error("password incorrect");
    return user;
  } catch (error) {
    throw error;
  }
};
