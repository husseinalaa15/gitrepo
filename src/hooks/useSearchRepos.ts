import { useState } from "react";
import axios from "../api/githubApi";
import useRepoStore from "../store/useRepos";

const useSearchRepos = () => {
  const { setRepositories, setLoading, setError } = useRepoStore();
  const [lastQuery, setLastQuery] = useState("");
  const searchRepositories = async (query: string) => {
    const trimmedQuery = query.trim();

    if (trimmedQuery.length < 3) {
      setError("Search query must be at least 3 characters.");
      return;
    }

    if (lastQuery === trimmedQuery) {
      console.log("AGAIN !!");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const response = await axios.get(`/search/repositories?q=${query}`);
      setRepositories(response.data.items.slice(0, 10));
      setLastQuery(query);
    } catch (err) {
      setError("Failed to fetch repositories. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { searchRepositories };
};

export default useSearchRepos;
