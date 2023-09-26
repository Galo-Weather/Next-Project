function Login() {
  return (
    <>
      <div class="loginContainer" id="loginContainer">
        <h1 class="loginTitle">Login</h1>
        <form class="loginForm">
          <div class="loginAlert hide" id="loginAlert">Alerta!</div>
          <span class="loginInputName">Email ou CNPJ</span>
          <label for="email" class="loginInputs">
            <input class="loginInput" type="text" name="email" id="loginBaseInput" placeholder="Nome@email.com"></input>
          </label>
          <span class="loginInputName">Senha</span>
          <label for="senha" class="loginInputs">
            <input class="loginInput" type="password" name="password" id="pass-Login-Input"></input>
            <img class="on" id="eyePasslogin" src="./Imgs/olho-aberto.png" alt="olho-aberto"></img>
          </label>
          <button class="loginSubmitBtn" id="loginSubmitBtn">Entrar</button>
        </form>
        <div class="redirectSignup">
          <p>Nao possui uma conta?<span id="redirectSignup">Cadastre-se</span></p>
        </div>
        <div class="loginRedirectHome">
          <a href="./index.html">Voltar a página inicial</a>
        </div>
      </div>
    </>
  );
}

export default Login