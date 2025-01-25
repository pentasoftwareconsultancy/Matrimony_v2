
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DashboardRoutes from './routes/DashboardRoutes';
import Topbar from '../src/components/topbar/Topbar'

import './App.css';

const App = () => {

  
  return (
    <>
     <div className="App"> 
     
      
   <Topbar/>
   
   

    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
  
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <Routes>
          <Route path="/*" element={<DashboardRoutes />} />
         

        </Routes>
       
      </div>
    </div>
    </div>
    </>
  );
};

export default App;
