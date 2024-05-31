import SkeletonList from "../SkeletonList";
import Skeleton from "../Skeleton";

function CommentSkeletonList() {
  return (
    <div className="comment-collection">
      <SkeletonList amount={5}>
        <div className="comment-card">
          <div className="comment-card-body">
            <div className="comment-card-email">
              <Skeleton short />
            </div>
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      </SkeletonList>
    </div>
  );
}

export default CommentSkeletonList;
