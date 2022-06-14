import Post from "./posts.model";

export const createPost = async (body, user) => {
  return await Post.create({
    text: body.text,
    createdDate: new Date(),
    createdBy: user.id,
  });
};

export const getPosts = async (limit = 10) => {
  return await Post.find()
    .populate("createdBy", "user")
    .sort({ createdDate: -1 })
    .limit(limit);
};

export const deletePost = async (id, user) => {
  return await Post.findOneAndDelete({
    _id: id,
    createdBy: user.id,
  });
};
