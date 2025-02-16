import { useState } from "react";
import useSearchRepos from "../../hooks/useSearchRepos";

const Search = () => {
  const [query, setQuery] = useState("");
  const { searchRepositories } = useSearchRepos();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchRepositories(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-3 ">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search GitHub Repositories..."
        className="border-2   text-blue-400 focus-visible:outline-none focus:!border-blue-400   border-primary p-2 w-full rounded-md"
        maxLength={30}
      />
      <button
        type="submit"
        className=" border-2 font-bold dropshadow text-blue-400 hover:bg-blue-400 hover:text-blue-950 border-primary p-2 rounded-md cursor-pointer"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
