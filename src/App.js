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
  //Sistema de verificação de contas
  var listaUser = JSON.parse(localStorage.getItem("usersList"))
  if (listaUser == null) {
    console.log('Lista de usuarios nao encontrada')
    console.log('Criando lista de usuarios')
    const user1 = {  //Conta admin
      name: "GaloAdmin",
      emailUser: "contatogalofiap@gmail.com",
      senhaUser: "12345"
    }
    let userList = []
    userList.push(user1)
    localStorage.setItem("usersList", JSON.stringify(userList)) //define a um localStorage todos os usuarios existentes
    console.log(listaUser)
  } else {
    console.log('lista de usuarios encontrada')
    console.log(listaUser)
  }
  //Local storage para usuario

  return (
    <div className="App">
      <Header />
      <GlobalStyles />
      <Routes>
        <Route path='*' element={<Error />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/Soluçao' element={<Solucao />} />
        <Route path='/Sign-in' element={<Login />} />
        <Route path='/Sign-up' element={<SignUp />} />
        <Route path='/Contato' element={<Contato />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
