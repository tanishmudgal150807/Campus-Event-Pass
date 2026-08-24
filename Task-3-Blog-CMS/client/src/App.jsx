import { useEffect, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

const API_URL = "http://localhost:5000/api/posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // READ: Get all posts
  const fetchPosts = async () => {
    try {
      setLoading(true);

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch posts.");
      }

      const data = await response.json();
      setPosts(data);
      setError("");
    } catch (error) {
      setError("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // CREATE / UPDATE
  const handlePostSaved = (savedPost) => {
    if (editingPost) {
      setPosts((currentPosts) =>
        currentPosts.map((post) =>
          post.id === savedPost.id ? savedPost : post
        )
      );

      setEditingPost(null);
    } else {
      setPosts((currentPosts) => [savedPost, ...currentPosts]);
    }

    setShowForm(false);
    setSelectedPost(null);
  };

  // DELETE
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete post.");
      }

      setPosts((currentPosts) =>
        currentPosts.filter((post) => post.id !== id)
      );

      if (selectedPost?.id === id) {
        setSelectedPost(null);
      }
    } catch (error) {
      setError("Unable to delete the post.");
    }
  };

  // EDIT
  const handleEdit = (post) => {
    setEditingPost(post);
    setSelectedPost(null);
    setShowForm(true);
  };

  // VIEW
  const handleView = (post) => {
    setSelectedPost(post);
    setShowForm(false);
  };

  // Filter posts
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <header className="hero">
        <p className="eyebrow">CONTENT MANAGEMENT SYSTEM</p>

        <h1>My Blog</h1>

        <p className="subtitle">
          Create, manage and publish your thoughts.
        </p>

        <button
          className="create-button"
          onClick={() => {
            setEditingPost(null);
            setSelectedPost(null);
            setShowForm(true);
          }}
        >
          + Create New Post
        </button>
      </header>

      {error && <div className="error-message">{error}</div>}

      {showForm && (
        <PostForm
          onPostSaved={handlePostSaved}
          editingPost={editingPost}
          onCancelEdit={() => {
            setEditingPost(null);
            setShowForm(false);
          }}
        />
      )}

      {selectedPost ? (
        <article className="post-detail">
          <button
            className="back-button"
            onClick={() => setSelectedPost(null)}
          >
            ← Back to Posts
          </button>

          <h2>{selectedPost.title}</h2>

          <p className="post-date">
            Published on{" "}
            {new Date(selectedPost.createdAt).toLocaleDateString()}
          </p>

          <div className="detail-content">
            {selectedPost.content}
          </div>

          <div className="detail-actions">
            <button onClick={() => handleEdit(selectedPost)}>
              Edit Post
            </button>

            <button
              onClick={() => handleDelete(selectedPost.id)}
            >
              Delete Post
            </button>
          </div>
        </article>
      ) : (
        <>
          <div className="toolbar">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <span>
              {filteredPosts.length}{" "}
              {filteredPosts.length === 1 ? "post" : "posts"}
            </span>
          </div>

          {loading ? (
            <p className="status-message">Loading posts...</p>
          ) : (
            <PostList
              posts={filteredPosts}
              onView={handleView}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;