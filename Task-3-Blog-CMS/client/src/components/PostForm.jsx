import { useState, useEffect } from "react";

function PostForm({ onPostSaved, editingPost, onCancelEdit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setContent(editingPost.content);
    } else {
      setTitle("");
      setContent("");
    }

    setError("");
  }, [editingPost]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setError("Title and content are required.");
      return;
    }

    const postData = {
      title: title.trim(),
      content: content.trim(),
    };

    try {
      const url = editingPost
        ? `http://localhost:5000/api/posts/${editingPost.id}`
        : "http://localhost:5000/api/posts";

      const method = editingPost ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      onPostSaved(data);

      setTitle("");
      setContent("");
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h2>{editingPost ? "Edit Post" : "Create New Post"}</h2>

      {error && <p className="form-error">{error}</p>}

      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Write your post content..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className="form-buttons">
        <button type="submit">
          {editingPost ? "Update Post" : "Publish Post"}
        </button>

        {editingPost && (
          <button type="button" onClick={onCancelEdit}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default PostForm;