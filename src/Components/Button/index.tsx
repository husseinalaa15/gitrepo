import useStarRepo from "../../hooks/useStarRepo";
import useRepoStore from "../../store/useRepos";
import { Repository } from "../../types/globals";

const StarButton = ({ repo }: { repo: Repository }) => {
  const { handleStarToggle } = useStarRepo();
  const { isRepoStarred } = useRepoStore();
  const isStarred = isRepoStarred(repo?.id);
  console.log(repo);
  return (
    <button
      className={`px-3 py-1 rounded w-full ${
        isStarred ? "bg-red-500" : "bg-green-500"
      } text-white`}
      onClick={() => handleStarToggle(repo.owner.login, repo.name, repo.id)}
    >
      {isStarred ? "Unstar" : "Star"}
    </button>
  );
};

export default StarButton;
