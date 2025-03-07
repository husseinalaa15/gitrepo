import useRepoStore from "../../store/useRepos";
import RepoCard from "../Card";

const RepoList = () => {
  const { repositories, loading, error } = useRepoStore();

  if (loading) return <p className="text-white">Loading repositories...</p>;
  if (error) return <p className="text-danger">{error}</p>;
  if (!repositories) return <p className="text-white">Search To Fetch</p>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-5 rounded-md ">
      {repositories.map((repo) => (
        <RepoCard repo={repo} key={repo.id} />
      ))}
    </div>
  );
};

export default RepoList;
