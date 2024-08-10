import React from 'react';
import MainPage from './pages/MainPage';
import RequestForm from './pages/RequestForm';
import Function1 from './pages/Function1'
import Function3 from './pages/Function3';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/request" element={<RequestForm />} />
          <Route path="/function1" element={<Function1 />} />
          <Route path="/fun3" element={<Function3 />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
