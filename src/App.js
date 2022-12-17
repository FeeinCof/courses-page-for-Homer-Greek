import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import HomePage from './pages/Home/Home';
import Offers from './pages/Offers/Offers';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={< HomePage />} exact />
        <Route path='offers' element={< Offers />}  exact />
        <Route path='*' element={<Navigate to='/' replace />}/>
      </Routes>
    </div>
  );
}

export default App;
