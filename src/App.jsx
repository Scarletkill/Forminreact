import React from 'react'
import Home from './components/home';
import UserForm from './Components/UserForm';
import UserForm2 from './form'
import Account from './setup page/Accountpage';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Account" element={<Account />} />
      </Routes>
    </>
  )
}

export default App;
