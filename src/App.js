import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import HomePage from './pages/Home/Home';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={< HomePage />} exact/>
        <Route path='*' element={<Navigate to='/' replace />}/>
      </Routes>
    </div>
  );
}

export default App;
