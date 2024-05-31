import { useQuery } from "@tanstack/react-query";
import { getPostComments } from "../api/comments";

const useComments = (postId, enabled = true) => {
  const {
    data = null,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => getPostComments(postId),
    enabled: enabled,
  });
  return { data, isLoading, isError };
};

export default useComments;
