import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoginPage from './pages/login/page';
import Sidebar from './components/sidebar/page';
import { CollapseMenu } from './Context';
import { useContext } from 'react';
import Cases from './pages/cases/page';
import Clients from './pages/clients/page';
import Tasks from './pages/tasks/page';
import Reports from './pages/reports/page';
import Calendar from './pages/calendar/page';
import Topbar from './components/topbar/page';
import CaseDetails from './pages/case-details/page';
import CreateCase from './pages/create-case/page';
import Dashboard from './pages/dashboard/page';

function App() {
  const { collapseMenu } = useContext(CollapseMenu);

  const loginRoute= typeof window !== 'undefined' && window.location.pathname === '/' ? true : false;

  // console.log(loginRoute);
  

  return (
    <Router>
      <div className="App">

        <div className="container-fluid" style={{ padding: '0' }}>
          <div className="row">
            {!loginRoute && 
              (<div className={`${collapseMenu ? 'col-sm-2' : 'col-sm-3'}`}>
                <Sidebar />
              </div>)
            }
            {/* <div className={`${collapseMenu ? 'col-sm-10' : 'col-sm-9'}`}> */}
            <div className={`${loginRoute ? 'col-sm-12' : (collapseMenu ? 'col-sm-10' : 'col-sm-9')}`}>
              {!loginRoute && (<Topbar />)}
              <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/dashboard/:id' element={<Dashboard />} />
                <Route path='/cases/:id' element={<Cases />} />
                <Route path='/clients/:id' element={<Clients />} />
                <Route path='/tasks/:id' element={<Tasks />} />
                <Route path='/reports/:id' element={<Reports />} />
                <Route path='/calendar/:id' element={<Calendar />} />
                <Route path='/case-details/:id' element={<CaseDetails />} />
                <Route path='/create-case' element={<CreateCase />} />
              </Routes>
            </div>
          </div>
        </div>


      </div>
    </Router>
  );
}

export default App;
