import { VerticalTimeline } from "react-vertical-timeline-component";
import PostCard from "./PostCard";
import { getRandomDate } from "../../utilities/util";

function PostList({ data }) {
  return (
    <div>
      <h1 className="title">Timeline</h1>
      <VerticalTimeline>
        {data.map((post) => {
          return <PostCard key={post.id} post={post} date={getRandomDate()} />;
        })}
      </VerticalTimeline>
    </div>
  );
}

export default PostList;
