import { useState } from "react"
import './App.css';

function App() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);

  function handleSubmit() {
    e.preventDefault();
    searchRepos();
  };

  function searchRepos() {
    setLoading(true);
    axios({
      method: "get"
      url: `https://api.github.com/users/${username}/repos`,
    }).then(res => {
      setLoading(false);
      setRepos(res.data);
    })
  }

  function renderRepo(repo) {
    return (
      <div className="row" key={repo.id}>
        <h2 className="repo-name">
          {repo.name}
        </h2>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="landing-page-container">
        <div className="left-side">
          <form className="form">
            <input
              classname="input"
              value={username}
              placeholder="Github Username"
              onChange={e => setUsername(e.target.value)}
              />
              <button className="button" onClick={handleSubmit}>{loading ? "Searching..." : "Search"}</button>
          </form>
          <div className="results-container">
            {repos.map(renderRepo)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
