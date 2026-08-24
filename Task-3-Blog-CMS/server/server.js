const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const dataFile = path.join(__dirname, "data", "posts.json");

// Read posts from JSON file
const readPosts = () => {
  const data = fs.readFileSync(dataFile, "utf-8");
  return JSON.parse(data);
};

// Write posts to JSON file
const writePosts = (posts) => {
  fs.writeFileSync(dataFile, JSON.stringify(posts, null, 2));
};

// GET all posts
app.get("/api/posts", (req, res) => {
  const posts = readPosts();
  res.json(posts);
});

// GET one post
app.get("/api/posts/:id", (req, res) => {
  const posts = readPosts();

  const post = posts.find(
    (post) => post.id === Number(req.params.id)
  );

  if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  res.json(post);
});

// CREATE a post
app.post("/api/posts", (req, res) => {
  const { title, content } = req.body;

  if (!title?.trim() || !content?.trim()) {
    return res.status(400).json({
      message: "Title and content are required",
    });
  }

  const posts = readPosts();

  const newPost = {
    id: Date.now(),
    title: title.trim(),
    content: content.trim(),
    createdAt: new Date().toISOString(),
  };

  posts.unshift(newPost);
  writePosts(posts);

  res.status(201).json(newPost);
});

// UPDATE a post
app.put("/api/posts/:id", (req, res) => {
  const { title, content } = req.body;

  if (!title?.trim() || !content?.trim()) {
    return res.status(400).json({
      message: "Title and content are required",
    });
  }

  const posts = readPosts();

  const index = posts.findIndex(
    (post) => post.id === Number(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  posts[index] = {
    ...posts[index],
    title: title.trim(),
    content: content.trim(),
  };

  writePosts(posts);

  res.json(posts[index]);
});

// DELETE a post
app.delete("/api/posts/:id", (req, res) => {
  const posts = readPosts();

  const filteredPosts = posts.filter(
    (post) => post.id !== Number(req.params.id)
  );

  if (filteredPosts.length === posts.length) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  writePosts(filteredPosts);

  res.json({
    message: "Post deleted successfully",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});