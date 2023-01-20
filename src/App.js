import './App.css';
import Landing from './screens/Landing';
import Searched from './screens/Searched'
import NotFound from './screens/Notfound';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router> 

      <div class= 'App'>
        <Routes>
          <Route path='/' element={<Landing/>} /> // render the ui when path matches the current URL
          <Route path='/recipe/:term' element={<Searched/>} /> // term is a placeholder for the user to enter
          <Route path="*" element={<NotFound/>}/>

        </Routes>

      </div>

    </Router>

  );
}

export default App;
