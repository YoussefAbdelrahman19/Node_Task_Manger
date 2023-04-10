const express = require ('express');
const router = express.Router ();
const {
  getAllPosts,
  getPost,
  createPosts,
  updatePosts,
  deletePosts,
} = require ('../controllers/posts.js');

router.route ('/').get (getAllPosts).post (createPosts);
router.route ('/:id').get (getPost).patch (updatePosts).delete (deletePosts);
module.exports = router;
