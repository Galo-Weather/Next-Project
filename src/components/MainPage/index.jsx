import styled from "styled-components";
import React from 'react';
import mainGif from '../../imgs/capaGif.gif';

const Home = styled.section`
    font-family: "Montserrat", sans-serif;
    margin: 0 auto;
    padding: 0;
`
const HomeContainer = styled.div`
    align-items: start;
    text-align: center;

    @media (min-width: 1100px) {
        margin-top: 2em;
        padding: 2em 0 em 0;
        min-height: 100vh;
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: 25% auto;
    }
`
const HomeImg = styled.figure`
    padding: 1em;
    
    img {
        max-width: 100%;
        border-radius: 4em;
    }
    @media (min-width: 1100px) {
        padding: 0 1em 0 0;
        text-align: start;
        grid-column: 2;

        img{
            max-width: 100%;
        }
    }
`
const HomeTxt1 = styled.p`
    padding: 1em;
    p {
        font-size: 3em;
        font-weight: bold;
        color: #0f62fe;
      }
    @media (min-width: 1100px) {
        padding-top: 5em;
        grid-column-start: 1;
        grid-column-end: 3;
    }
`
const HomeTxt2 = styled.p`
    padding: 1em;

    p:first-child {
        margin-bottom: 0.5em;
        font-size: 2em;
        font-weight: bold;
        color: #0f62fe;
      }
    p {
        margin-bottom: 0.5em;
        font-size: 1.2em;
      }
      @media (min-width: 1100px) {
        display: flex;
        flex-direction: column;
        max-width: 80%;
        padding: 2em;
        text-align: center;
        grid-column: 1;
        grid-row: 2;
    }

`

function MainPage() {
    return (
        <>
            <Home>
                <HomeContainer>
                    <HomeTxt1>
                        <p>Cidades Sustentáveis:</p>
                        <p>O desafio</p>
                    </HomeTxt1>
                    <HomeImg>
                        <img
                            src={mainGif}
                            alt='gif sustentabilidade'></img>
                    </HomeImg>
                    <HomeTxt2>
                        <p>O Desafio da IBM:</p>
                        <p>A IBM está dedicada a enfrentar o desafio de tornar as cidades mais sustentáveis, buscando soluções inovadoras que equilibrem o desenvolvimento econômico, social e ambiental. Em nosso projeto, focamos em São Paulo, uma cidade que enfrenta o grave problema dos alagamentos urbanos. Nosso compromisso é contribuir com soluções eficazes para mitigar esses impactos, visando um ambiente mais seguro e habitável para as futuras gerações, alinhados com os Objetivos de Desenvolvimento Sustentável da ONU.</p>
                    </HomeTxt2>
                </HomeContainer>
            </Home>
        </>
    );
}

export default MainPage