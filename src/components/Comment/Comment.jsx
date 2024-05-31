function Comment({ comment }) {
  return (
    <div key={comment.id} className="comment-card">
      <div className="comment-card-body">
        <div className="comment-card-email">{comment.email}</div>
        {comment.body}
      </div>
    </div>
  );
}

export default Comment;
