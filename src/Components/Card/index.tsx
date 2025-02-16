import { truncateText } from "../../utils/truncText";
import StarButton from "../Button";
import ForkIcon from "../../assets/icons/git-fork.svg";
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
  return (
    <div className="   rounded-md my-2   p-7 bg-secondary shadow- grid grid-cols-1 gap-3">
      <div className="overflow-hidden grid grid-cols-1 gap-3">
        <div className="card-header grid grid-cols-2 justify-between w-full items-center">
          <h3 className="text-lg  font-bold">{truncateText(repo?.name, 10)}</h3>
          <div className="flex gap-2 w-full items-center  justify-end">
            <img
              src={repo?.owner?.avatar_url}
              className=" rounded-full size-[30px] object-cover"
              alt={repo.owner?.login}
            />
            <h3 className="text-sm font-bold">
              {truncateText(repo?.owner?.login, 10)}
            </h3>
          </div>
        </div>

        <p>{truncateText(repo?.description, 20)}</p>
        <div className="repo-data flex justify-between items-center">
          <span>⭐ {repo.stargazers_count.toLocaleString()}</span>
          <div className=" flex items-center invert gap-2 text-white ">
            <img src={ForkIcon} alt="fork" className="size-[20px]" />
            <span className="text-white invert">
              {repo.forks_count.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
      <div className="self-end">
        <StarButton repo={repo} />
      </div>
    </div>
  );
};

export default RepoCard;
