import StarButton from "../Button";

type IProps = {
  repo: Repo;
};

type Repo = {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  owner: Owner;
};

type Owner = {
  avatar_url: string;
  login: string;
};

const RepoCard: React.FC<IProps> = ({ repo }) => {
  console.log(repo, "REPO");
  return (
    <div
      key={repo.id}
      className=" border rounded my-2  p-5 grid grid-cols-1 gap-3"
    >
      <div className="overflow-hidden grid grid-cols-1 gap-3">
        <div className="card-header grid grid-cols-2 justify-between w-full items-center">
          <h3 className="text-lg font-bold">{repo.name}</h3>
          <div className="flex gap-2 w-full items-center  justify-end">
            <img
              src={repo.owner.avatar_url}
              className=" rounded-full size-[30px] object-cover"
              alt={repo.owner.login}
            />
            <h3 className="text-sm font-bold">{repo.owner.login}</h3>
          </div>
        </div>

        <p>{repo.description}</p>
        <div className="repo-data flex justify-between items-center">
          <span>⭐ {repo.stargazers_count}</span>
          <span> F {repo.forks_count}</span>
        </div>
      </div>
      <div className="self-end">
        <StarButton repo={repo} />
      </div>
    </div>
  );
};

export default RepoCard;
