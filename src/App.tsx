import RepoList from "./Components/RepoList";
import Search from "./Components/SearchInput";
import Wrapper from "./Components/Wrapper";
import Logo from "./assets/icons/git.png";
import HA from "./assets/icons/husseinalaaCIRCLE.png";
import Github from "./assets/icons/github.svg";
import Linkedin from "./assets/icons/linkedin.svg";

function App() {
  return (
    <main className="main-content min-h-screen bg-background ">
      <Wrapper classes="grid grid-cols-1 gap-4">
        <div className="grid-cols-2 grid justify-between items-center">
          <div className="app-header flex items-center gap-3">
            <img src={Logo} className="size-[50px]" />
            <h1 className="text-3xl font-bold ">Gitrepos</h1>
          </div>
          <div className="justify-self-end   gap-3">
            <ul className="grid grid-cols-3 items-center gap-5">
              <li className="dropshadow">
                <a href="https://husseinalaa.com/" target="_blank">
                  <img src={HA} className="w-[35px]" />
                </a>
              </li>
              <li className="dropshadow">
                <a href="https://github.com/husseinalaa15" target="_blank">
                  <img src={Github} className="w-[30px]" />
                </a>
              </li>
              <li className="dropshadow">
                <a
                  href="https://www.linkedin.com/in/husseinalaa12199/"
                  target="_blank"
                >
                  <img src={Linkedin} className="w-[30px]" />
                </a>
              </li>
            </ul>
          </div>
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
