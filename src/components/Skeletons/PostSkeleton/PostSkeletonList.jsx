import { VerticalTimeline } from "react-vertical-timeline-component";
import SkeletonList from "../SkeletonList";
import PostCardSkeleton from "./PostCardSkeleton";

function PostSkeletonList() {
  return (
    <div>
      <h1 className="title">Timeline</h1>
      <VerticalTimeline>
        <SkeletonList amount={5}>
          <PostCardSkeleton />
        </SkeletonList>
      </VerticalTimeline>
    </div>
  );
}

export default PostSkeletonList;
