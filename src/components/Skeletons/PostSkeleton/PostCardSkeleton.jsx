import { VerticalTimelineElement } from "react-vertical-timeline-component";
import Skeleton from "../Skeleton";
import { getRandomInteger } from "../../../utilities/util";
import WorkIcon from "../../Icons/WorkIcon";
import SchoolIcon from "../../Icons/SchoolIcon";

function PostCardSkeleton() {
  const workIconStyles = { background: "#06D6A0" };
  const schoolIconStyles = { background: "#f9c74f" };

  const isWorkIcon = getRandomInteger(1, 100) % 2 === 0;
  return (
    <VerticalTimelineElement
      key={crypto.randomUUID()}
      date={<Skeleton short />}
      dateClassName="date"
      iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
      icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
    >
      <Skeleton />
      <Skeleton />

      <div id="description" className="vertical-timeline-element-description">
        <Skeleton />
        <Skeleton />
      </div>
      <button className="button-skeleton"></button>
    </VerticalTimelineElement>
  );
}

export default PostCardSkeleton;
