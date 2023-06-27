const Post = require("../models/post");
const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports.allPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).sort("-createdAt");
    res.status(200).json({ posts, status: true });
  } catch (error) {
    res.status(500).json({ msg: error, status: false });
  }
};

module.exports.create = async (req, res) => {
  try {
    const { img, prompt } = req.body;
    const imgUrl = await cloudinary.uploader.upload(img);
    const newPost = await Post.create({
      img: imgUrl.url,
      user: req.user.username,
      prompt: prompt,
    });

    res.status(200).json({ msg: "Post Created", status: true, newPost });
  } catch (error) {
    res.status(500).json({ msg: error, status: false });
  }
};

module.exports.like = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      post.like.push(req.body.id);
      post.save();
      res.status(200).json({ msg: "Liked" }, post);
    } else {
      res.status(401).json({ msg: "BAD REQUEST" });
    }
  } catch (error) {
    res.status(500).json({ msg: err, status: false });
  }
};

module.exports.delete = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("user");
    if (post && post.user === req.body.id) {
      post.remove();
      res.status(200).json({ msg: "POST DELETED" });
    } else {
      res.status(401).json({ msg: "UNAUTHORIZED TO DELETE" });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
