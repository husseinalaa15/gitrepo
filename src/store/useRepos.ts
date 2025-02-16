import { create } from "zustand";
import { Repository } from "../types/globals";

interface RepoState {
  repositories: Repository[];
  loading: boolean;
  error: string | null;
  starredRepos: number[];

  setRepositories: (repos: Repository[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  toggleStar: (repoId: number) => void;
  isRepoStarred: (repoId: number) => boolean;
}

const useRepoStore = create<RepoState>((set, get) => ({
  repositories: [],
  error: null,
  loading: false,
  starredRepos: [],

  setRepositories: (repos) => set({ repositories: repos }),

  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  toggleStar: (repoId) =>
    set((state) => {
      const isStarred = state.starredRepos.includes(repoId);
      const updatedStarredRepos = isStarred
        ? state.starredRepos.filter((id) => id !== repoId)
        : [...state.starredRepos, repoId];

      return { starredRepos: updatedStarredRepos };
    }),
  isRepoStarred: (repoId) => get().starredRepos.includes(repoId),
}));

export default useRepoStore;
