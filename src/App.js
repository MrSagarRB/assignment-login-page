import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Users from "./components/Users";

function App() {
  return (
    <Router>
      <div className="App">
        

        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
