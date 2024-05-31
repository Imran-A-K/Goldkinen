import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/posts";
import { getUsers } from "../api/users";

const usePostsWithUserInfo = () => {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  const usersQuery = useQuery({ queryKey: ["users"], queryFn: getUsers });

  if (postsQuery.isLoading || usersQuery.isLoading) {
    return { isLoading: true, data: null, error: null };
  }

  if (postsQuery.isError || usersQuery.isError) {
    return {
      isLoading: false,
      data: null,
      error: postsQuery.error || usersQuery.error,
    };
  }

  const usersMap = usersQuery.data.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});

  const postsWithUserInfo = postsQuery.data.map((post) => ({
    ...post,
    user: usersMap[post.userId],
  }));

  return { isLoading: false, data: postsWithUserInfo, error: null };
};

export default usePostsWithUserInfo;
