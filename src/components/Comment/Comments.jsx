import Comment from "./Comment";
import CommentSkeletonList from "../Skeletons/Comment/CommentSkeletonList";

function Comments({ comments, isLoading = true }) {
  if (isLoading) return <CommentSkeletonList />;
  return (
    <div className="comment-collection">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default Comments;
