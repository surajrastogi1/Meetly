import React from 'react'
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Protectedlayout from './components/Protectedlayout';
import Dashboard from './pages/Dashboard';
import Pricing from './pages/Pricing';
import Session from './pages/Session';
import MeetingRoom from './pages/MeetingRoom';

const App = () => {
  return (
    <>
      <Toaster />

      <Routes>
        {/* Public Routes */}

        <Route path="/login" element={<Login mode="login" />} /> 
        <Route path="/register" element={<Login mode="register" />} /> 

        {/* Private Routes */}

        <Route element={<ProtectedRoute/>}>
          <Route element={<Protectedlayout/>}>
            <Route>
              <Route path="/dashboard" element= {<Dashboard/>}/>
              <Route path="/pricing" element= {<Pricing />}/>
              <Route path="/Session" element= {<Session />}/>
            </Route>
          </Route>
          <Route path='meeting/:meetingId' element={<MeetingRoom />}/>
        </Route>

        {/* Other Routes */}
        <Route path="*" element={<Navigate to='/dashboard' replace/>}/>
        

      </Routes>
    </>
  )
}

export default App;
