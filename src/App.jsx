import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route path="/" 
          exact element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="*" element={<Error/>}></Route> 
          {/* (*)-wrong route => error page*/}
        </Routes>
      </Router>
    </AuthWrapper>
    
  );
}

export default App;