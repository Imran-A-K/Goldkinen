import { VerticalTimelineElement } from "react-vertical-timeline-component";
import WorkIcon from "../Icons/WorkIcon";
import SchoolIcon from "../Icons/SchoolIcon";
import { useState } from "react";
import useComments from "../../hooks/usePostComment";
import Comments from "../Comment/Comments";

function PostCard({ post, date }) {
  const [showComments, setShowComments] = useState(false);
  const { data: comments, isLoading } = useComments(post.id, showComments);

  const workIconStyles = { background: "#06D6A0" };
  const schoolIconStyles = { background: "#f9c74f" };

  const isWorkIcon = post.id % 2 === 0;

  return (
    <VerticalTimelineElement
      key={post.id}
      date={date}
      dateClassName="date"
      iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
      icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
    >
      <h3 className="vertical-timeline-element-title">{post.title}</h3>
      <h5
        className="vertical-timeline-element-subtitle"
        style={{
          paddingTop: "4px",
        }}
      >
        by- {post.user.name} <span className="date"> -{date}</span>
      </h5>
      <p id="description" className="vertical-timeline-element-description">
        {post.body}
      </p>
      <button className="button" onClick={() => setShowComments(!showComments)}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>

      {showComments ? (
        <Comments comments={comments} isLoading={isLoading} />
      ) : null}
    </VerticalTimelineElement>
  );
}

export default PostCard;
