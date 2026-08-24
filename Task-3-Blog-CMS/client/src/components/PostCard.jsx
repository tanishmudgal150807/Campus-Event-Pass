function PostCard({ post, onView, onEdit, onDelete }) {
  const preview =
    post.content.length > 150
      ? post.content.substring(0, 150) + "..."
      : post.content;

  return (
    <article className="post-card">
      <h3>{post.title}</h3>

      <p>{preview}</p>

      <div className="post-actions">
        <button onClick={() => onView(post)}>View</button>

        <button onClick={() => onEdit(post)}>Edit</button>

        <button onClick={() => onDelete(post.id)}>Delete</button>
      </div>
    </article>
  );
}

export default PostCard;