import "./App.css";

import "react-vertical-timeline-component/style.min.css";

import PostSkeletonList from "./components/Skeletons/PostSkeleton/PostSkeletonList";
import PostList from "./components/Post/PostList";

import usePostsWithUserInfo from "./hooks/usePostsWithUserInfo";

function App() {
  const { isLoading, data, error } = usePostsWithUserInfo();
  if (isLoading) return <PostSkeletonList />;

  if (error) return <h1>Error: {error.message}</h1>;
  return <PostList data={data} />;
}

export default App;
