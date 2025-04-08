import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header';
import Login from './Authentication/Login';
import TaskInput from './Tasks/TaskInput';
import TaskList from './Tasks/TaskList';
import PrivateRoute from './Authentication/PrivateRoute';
import '../styles/global.css';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/login" element={
            isAuthenticated ? <Navigate to="/" /> : <Login />
          } />
          <Route path="/" element={
            <PrivateRoute>
              <div className="todo-container">
                <TaskInput />
                <TaskList />
              </div>
            </PrivateRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;