//Import components
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Error from './components/Error';
import Login from './components/Login';
import Solucao from './components/Solucao';
import SignUp from './components/SignUp';
import Contato from './components/Contato';

//Import react e css
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <Header />
      <GlobalStyles/>
      <Routes>
        <Route path='*' element={<Error />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/Soluçao' element={<Solucao />} />
        <Route path='/Sign-in' element={<Login />} />
        <Route path='/Sign-up' element={<SignUp />} />
        <Route path='/Contato' element={<Contato />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
