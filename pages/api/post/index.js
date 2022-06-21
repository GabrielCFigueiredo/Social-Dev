import { withIronSessionApiRoute } from "iron-session/next";
import createHandler from "../../../lib/middleWares/nextConnect";
import validate from "../../../lib/middleWares/validation";
import { ironConfig } from "../../../lib/middleWares/ironSession";
import {
  createSchema,
  deleteSchema,
  editSchema,
} from "../../../modules/posts/posts.schema";
import {
  createPost,
  deletePost,
  editPost,
  getPosts,
} from "../../../modules/posts/posts.service";

const handler = createHandler();
handler.post(validate({ body: createSchema }), async (req, res) => {
  try {
    if (!req.session.user) return res.status(401).send();
    const post = await createPost(req.body, req.session.user);
    res.status(201).send({ post });
  } catch (error) {
    return res.status(400).send(error.message);
  }
});
handler.get(async (req, res) => {
  try {
    if (!req.session.user) return res.status(401).send();
    const posts = await getPosts();
    res.status(200).send({ posts });
  } catch (error) {
    res.status(500).send(error.message);
  }
});
handler.delete(validate(deleteSchema), async (req, res) => {
  try {
    if (!req.session.user) return res.status(401).send();
    const deletePosts = await deletePost(req.body.id, req.session.user);
    if (deletePosts) return res.status(200).send({ ok: true });
    return res.status(400).send("not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
handler.patch(validate(editSchema), async (req, res) => {
  try {
    if (!req.session.user) return res.status(401).send();
    const postEdit = await editPost(req.body, req.session.user);
    if (postEdit) return res.status(200).send({ ok: true });
    return res.status(400).send("not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
export default withIronSessionApiRoute(handler, ironConfig);
