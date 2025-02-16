import RepoList from "./Components/RepoList";
import Search from "./Components/SearchInput";
import Wrapper from "./Components/Wrapper";
import Logo from "./assets/icons/git.png";
function App() {
  return (
    <main className="main-content min-h-screen bg-background ">
      <Wrapper classes="grid grid-cols-1 gap-4">
        <div className="app-header flex items-center gap-3">
          <img src={Logo} className="size-[50px]" />
          <h1 className="text-3xl font-bold ">Gitrepos</h1>
        </div>
        <section className="repos flex-col flex gap-5">
          <Search />
          <RepoList />
        </section>
      </Wrapper>
    </main>
  );
}

export default App;
