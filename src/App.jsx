import Header from './components/Header';
import MainPage from './components/MainPage';
import Error from './components/Error';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='*' element={<Error />}/>
        
        <Route path='/' element={<MainPage />} />
        <Route path='/Sign-in' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
