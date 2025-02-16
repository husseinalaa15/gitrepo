import githubApi from "../api/githubApi";
import useRepoStore from "../store/useRepos";

const useStarRepo = () => {
  const { toggleStar, isRepoStarred } = useRepoStore();

  const handleStarToggle = async (
    owner: string,
    repo: string,
    repoId: number
  ) => {
    const isStarred = isRepoStarred(repoId);
    const url = `/user/starred/${owner}/${repo}`;

    try {
      if (isStarred) {
        await githubApi.delete(url);
      } else {
        await githubApi.put(url);
      }
      toggleStar(repoId);
    } catch (error) {
      console.error("Failed to toggle star:", error);
    }
  };

  return { handleStarToggle };
};

export default useStarRepo;
