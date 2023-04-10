const getAllPosts = (req, res) => {
  res.send ('all posts');
};
const getPost = (req, res) => {
  res.send ('get post');
};
const createPosts = (req, res) => {
  res.send ('create posts');
};
const updatePosts = (req, res) => {
  res.send ('update posts');
};
const deletePosts = (req, res) => {
  res.send ('delete posts');
};

module.exports = {
    getAllPosts,
    getPost,
    createPosts,
    updatePosts,
    deletePosts,
}