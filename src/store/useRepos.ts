import { create } from "zustand";

interface RepoState {
  repositories: any[];
  loading: boolean;
  error: string | null;

  setRepositories: (repos: any[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

const useRepoStore = create<RepoState>((set) => ({
  repositories: [],
  error: null,
  loading: false,
  setRepositories: (repos) => set({ repositories: repos }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));

export default useRepoStore;
