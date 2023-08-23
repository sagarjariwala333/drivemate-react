import './App.css';
import Login from './Containers/Login';
import Signup from './Containers/Signup';
import UploadDocumnets from './Containers/Driver/UploadDocuments';
import Header from './Containers/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Customer from './Containers/Admin/Customer';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Customer} />
        <Route path='/signup' Component={Signup} />
      </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
