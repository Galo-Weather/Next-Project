import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../imgs/galoBanner.png"
import Auth from "./script"

const LoginPage = styled.div`
  font-family: "Montserrat", sans-serif;
  box-sizing: border-box;
  min-height: 93vh;
`
const LogoIMG = styled.figure`
  img{
    width: 20em;
    padding: 2em 0;
    margin-top: 2em;
  }
  @media (min-width: 1100px){
    margin-top: 4em;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-bottom: 2em;
`
const LoginContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em 3em;
  background: #fbfbfb;
  border-radius: 12px;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.65);
  min-height: 60vh; 
  width: 20em;
  z-index: 1;
  h1{
    padding: 0 0;
    font-size: 1.6em;
    font-weight: bold;
    text-align: center;
    color: #0f62fe;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0f62fe;
    border: none;
    border-radius: 21px;
    box-shadow: 0px 1px 8px #ffffff;
    cursor: pointer;
    color: white;
    padding: 1em;
    margin: 1em auto;
    height: 42.3px;
    transition: 0.25s;
    width: 153px;
  }
  button:hover {
    box-shadow: 0px 1px 18px #afafaf;
  }
`
const LoginForm = styled.form`
  align-items: left;
  display: flex;
  flex-direction: column;
  span{
  }
`
const LoginAlert = styled.div`
  display: flex;
  font-weight: bold;
  color: red;
  justify-content: center;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`
const LoginInputs = styled.label`
  display: flex;
  flex-direction: column;
  input{
    background: #fbfbfb;
    padding-top: 10px;
    border: none;
    border-bottom: 1px solid #0f62fe;
    outline: none;
    padding-top: 0.5em;
    padding-left: 0.3em;
    font-size: 1em;
  }
  img{

  }
`
const RedirectSignup = styled.div`
  padding: 0 0 1em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; 
  p{
    margin: 0;
  }
  a{
    text-decoration: none;
    color: #0f62fe;
    font-weight: bold;
  }
`
const RedirectHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; 
  a{
    text-decoration: none;
    color: #0f62fe;
    font-weight: bold;
  }
`


function Login() {
  return (
    <LoginPage>
      <Container>
        <LogoIMG>
          <Link to="/"><img
            src={Logo}
            class="login-img"
            alt="Galo Weather Logo"></img></Link>
        </LogoIMG>
        <LoginContainer>
          <h1 class="loginTitle">Login</h1>
          <LoginForm onSubmit={Auth}>
            <LoginAlert id="loginAlert">Alerta!</LoginAlert>
            <LoginInputs>
              <span>Email</span>
              <input class="loginInput" type="text" name="email" id="loginBaseInput" placeholder="Nome@email.com"></input>
            </LoginInputs>
            <LoginInputs>
              <span>Senha</span>
              <input class="loginInput" type="password" name="password" id="pass-Login-Input" placeholder="password">
              </input>
            </LoginInputs>
            <button>Entrar</button>
          </LoginForm>
          <RedirectSignup>
            <p>Nao possui uma conta?</p>
            <Link to="/Sign-up" id="redirectSignup">Cadastre-se</Link>
          </RedirectSignup>
          <RedirectHome>
            <Link to="/">Voltar a página inicial</Link>
          </RedirectHome>
        </LoginContainer>
      </Container>
    </LoginPage>
  );
}

export default Login