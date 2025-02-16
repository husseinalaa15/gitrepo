import useRepoStore from "../../store/useRepos";
import RepoCard from "../Card";

const RepoList = () => {
  const { repositories, loading, error } = useRepoStore();

  if (loading) return <p>Loading repositories...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!repositories) return <p className="text-gray-400">Search To Fetch</p>;
  console.log(repositories);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-5 rounded-md ">
      {repositories.map((repo) => (
        <RepoCard repo={repo} />
      ))}
    </div>
  );
};

export default RepoList;
