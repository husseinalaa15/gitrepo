const StarButton = ({ repoId }: { repoId: number }) => {
  return (
    <button
      onClick={() => console.log("as")}
      className={`px-4 py-2 rounded w-full bg-yellow-500 `}
    >
      Star
    </button>
  );
};

export default StarButton;
