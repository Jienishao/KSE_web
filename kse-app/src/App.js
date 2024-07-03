import React from 'react';
import MainPage from './pages/MainPage';
import Request from './pages/Request';
import Function3 from './pages/Function3';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/request" element={<Request />} />
          <Route path="/fun3" element={<Function3 />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
