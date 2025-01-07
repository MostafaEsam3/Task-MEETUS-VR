import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Login from './component/AuthComponent/Login/Login';
const Dashboard = React.lazy(() => import('./Dashboard/Dashboard'));


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route 
          path="/dashboard" 
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Dashboard/>
            </Suspense>
          } 
        /> 
    </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
