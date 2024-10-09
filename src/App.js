import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoginPage from './pages/login/page';
import Dashboard from './pages/dashboard/page';
import Sidebar from './components/sidebar/page';
import { CollapseMenu } from './Context';
import { useContext } from 'react';
import Cases from './pages/cases/page';
import Clients from './pages/clients/page';
import Tasks from './pages/tasks/page';
import Reports from './pages/reports/page';
import Calendar from './pages/calendar/page';
import Topbar from './components/topbar/page';

function App() {
  const { collapseMenu } = useContext(CollapseMenu);

  return (
    <Router>
      <div className="App">

        <div className="container-fluid" style={{ padding: '0' }}>
          <div className="row">
            <div className={`${collapseMenu ? 'col-sm-2' : 'col-sm-3'}`}>
              <Sidebar />
            </div>
            <div className={`${collapseMenu ? 'col-sm-10' : 'col-sm-9'}`}>
              <Topbar />
              <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/dashboard/:id' element={<Dashboard />} />
                <Route path='/cases/:id' element={<Cases />} />
                <Route path='/clients/:id' element={<Clients />} />
                <Route path='/tasks/:id' element={<Tasks />} />
                <Route path='/reports/:id' element={<Reports />} />
                <Route path='/calendar/:id' element={<Calendar />} />
              </Routes>
            </div>
          </div>
        </div>


      </div>
    </Router>
  );
}

export default App;
