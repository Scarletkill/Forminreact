import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import Form1 from './pages/form1';
import Form2 from './pages/form2';
import Account from './setup page/Accountpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Account" element={<Account />} />
        <Route path='/Form1' element={< Form1 />} />
        <Route path="/Form2" element={<Form2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
