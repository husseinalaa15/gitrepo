import RepoList from "./Components/RepoList";
import Search from "./Components/SearchInput";
import Wrapper from "./Components/Wrapper";

function App() {
  return (
    <main className="main-content min-h-screen bg-background ">
      <Wrapper classes="grid grid-cols-1 gap-4">
        <h1 className="text-3xl font-bold text-primary">Gitrepos</h1>
        <section className="repos flex-col flex gap-2">
          <Search />
          <RepoList />
        </section>
      </Wrapper>
    </main>
  );
}

export default App;
