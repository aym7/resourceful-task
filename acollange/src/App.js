import { Outlet, Link } from "react-router-dom"

import './App.css';


function App() {
  return (
    <div className="App">
        <nav>
          <Link to="/album">Album</Link> |{" "}
          <Link to="/uploader">Uploader</Link> |{" "}
          <Link to="/authenticationux">Authentication UX</Link>
        </nav>
        <Outlet />
    </div>
  );
}

export default App;
