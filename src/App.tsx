import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import AppState from './context/background/AppState';
import Account from './pages/Account';
import Send from "./pages/Send";

const App = () => {
  return (
    <AppState>
        <Router>
          <Routes>
            <Route path='/' element={<Account/>} /> 
            <Route path='/send' element={<Send/>} />
            <Route path='/send-success' element={<Send/>} />
          </Routes>
      </Router>
    </AppState>
  );
};

export default App;
