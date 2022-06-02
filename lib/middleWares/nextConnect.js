import connect from "next-connect";
import mongooseMiddleware from "./mongoose"

export default function CreateHandler() {
  return connect().use(mongooseMiddleware);
}
