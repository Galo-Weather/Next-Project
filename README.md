# Desenvolvimento e Entrega do Checkpoint - Web Development with JavaScript :rooster:
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
O projeto é voltado para a aplicação prática dos conceitos aprendidos em sala de aula, na matéria de Web Development with JavaScript. O conteúdo aqui praticado é a utilização da biblioteca React, bem como de seus módulos e componentes, para a construção de elementos HTML/CSS/JavaScript de maneira mais rápida e fácil visto que, ao invés de escrevermos toda a estruturação do site manualmente, utilizaríamos os recursos prontos do React (e derivados).

Neste repostiório, disponibilizamos a construção de um _Header_ e um _Aside_ para uma aplicação WEB de uma vinheria fictícia, a **Vinheria Galo.**
___
## Desenvolvimento do Projeto
O projeto foi desenvolvido utilizando como base a biblioteca React, para a estruturação do código, juntamente com a biblioteca _styled-contents_, par aa estilização do componente.

O _Header_ é o componente presente em todas as páginas do site da vinheria, e pode ser dividido nas seguintes partes:
- Título da Vinheria Fictícia (_Vinícola Galo_)
- Logotipo da Vinheira Fictícia
- Menu de navegação, para redirecionamento entre as páginas, composto pelos seguintes botões:
  - Home
  - Sobre
  - Contato
  - Blog
  - FAQ 

A estruturação e estilização do _Header_ se encontra no [arquivo de mesmo nome]("./src/components/Header/index.js"), dentro da pasta "Header", em "Components".

A imagem utilizada como logtipo fictício da _Vinheria Galo_ se encontra dentro da [pasta "imgs"](./src/imgs/Logo%20vinicola%20galo.png)

Já o _Aside_ desenvolvido apresenta os seguintes recursos:
- Uma breve biografia da vinheria
- Uma imagem representativa (o logo da vinheira)
- Links para as redes sociais dosa desenvolvedores do projeto (GitHub e LinkedIn)
- Lista de competências necessárias a um _sommelier_ de vinhos

 E o componente foi feito com os parâmetros: _widht_: 300px, _height_: 800px

Por fim, o projeto ainda conta com um _PlaceHolder_, que informa a respeito do estágio incompleto da página WEB (uma vez que o propósito do projeto era apenas o desenvolvimento do _Header_)

**Atenção:** O projeto não se encontra atualmente responsivo para todos os dispositivos, funcionando adequadamente apenas em dispositivos acima de 700px.
___
## Como executar o projeto
Para executar o projeto, é necessário copiar o repositório em uma máquina local (através de um _IDE_, por exemplo), e ter instalado o ambiente de desenvolvimento [Node](https://nodejs.org/en).

Uma vez que os arquivos estão presentes na máquina, é necessário utilizar o comando "npm install" através de um terminal de comando na pasta principal, para que a biblioteca styled-components também seja adicionada aos arquivos*

Por fim, é necessário somente utilizar o comando "npm start" para que a página com o _PlaceHolder_, o _Header_ e o _Aside_ seja exibida.

*atenção para mudar o diretório utilizado para a pasta principal dos arquivos



_____
# Projeto next

npm install para receber todos os frameworks usados, sendo eles:
- styled components
- bootstrap
- router dom
