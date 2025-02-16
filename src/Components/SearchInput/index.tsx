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
        className="border p-2 w-full rounded-md"
      />
      <button
        type="submit"
        className=" border-1 font-bold  text-white p-2 rounded-md"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
