import "./App.css";
import { Search } from "./components/Search";
import { Forcast } from "./components/Forcast";
import {Route ,BrowserRouter as Router,Routes} from 'react-router-dom'


function App() {



  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/forcast" element={<Forcast/>}/>
          <Route path="/" element={<Search/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
