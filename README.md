# Desenvolvimento e Entrega da 4ª Sprint - Front-end Design & Web Development with JavaScript :rooster:
![Badge Concluido](https://img.shields.io/badge/STATUS-CONCLUIDO-GREEN)

**Nomes + RM dos integrantes:**
- Guilherme Akio - 98582
- Matheus Motta - 550352
- Guilherme Morais - 551981
- Fabrício Saavedra - 97631	
- Vinicius Buzato - 99125

**Turma:** 1ESPW

**Ano:** 2023
___
<p align="center">
<img src="./src/imgs/Logo%20vinicola%20galo.png" align=center width="300px" height="auto">
</p>

## Descrição do Projeto
O projeto é voltado para a aplicação prática dos conceitos aprendidos em sala de aula, nas matérias de Front-end Design e Web Development with JavaScript. 

O conteúdo aqui praticado é a utilização da biblioteca React, bem como de seus módulos e componentes (como por exemplo _styled components_, _bootstrap_ e _router dom_), para a construção de elementos HTML/CSS/JavaScript de maneira mais rápida e fácil.

Utilizamos também a estilização de páginas via SASS para construção mais rápida de estilizações CSS dinâmicas.

Neste repostiório, disponibilizamos a construção final da página do projeto desenvolvido para a Challenge proposta pela IBM, o **Galo Weather**
___
## Desenvolvimento do Projeto
O projeto foi desenvolvido utilizando como base a biblioteca React, para a estruturação do código, juntamente com outras bibliotecas para a estilização e funcionalidadeds dos componente.

O site do projeto é composto pelas páginas e seções:
  - Home
  - Problema
  - Causas
  - Solução
  - Sobre Nós
  - Contato

A estruturação de todos os componentes utlizados no site se encontram na pasta _[components](./src/components)_. A estilização de todos os componentes foi feita através da biblitoeca _styled-components_, com exceção do componente [Test]("./src/components/Test/index.js"), cuja estilização foi feita utilizando [SASS](./src/components/Test/style.scss).

As imagens utilizadas ao longo de todo o site se encontram na [pasta "imgs"](./src/imgs)

___
## Como executar o projeto
Para executar o projeto, é necessário copiar o repositório em uma máquina local (através de um _IDE_, por exemplo), e ter instalado o ambiente de desenvolvimento [Node](https://nodejs.org/en).

Uma vez que os arquivos estão presentes na máquina, é necessário utilizar o comando "npm install" através de um terminal de comando na pasta principal, para que a biblioteca styled-components também seja adicionada aos arquivos*

Por fim, é necessário somente utilizar o comando "npm start" para que a página seja exibida.

Alternativamente, você pode acessar a versão hospedada do site através [deste link](https://challenge-2023-d826e.web.app/Soluçao).

*atenção para mudar o diretório utilizado para a pasta principal dos arquivos



_____
# Projeto next

npm install para receber todos os frameworks usados, sendo eles:
- styled components
- bootstrap
- router dom
