import styled from "styled-components";
import React from 'react';
import mainGif from '../../imgs/capaGif.gif';
import problemaImagem from '../../imgs/problemaImagem.jpg';
import Chuvas from '../../imgs/Chuvas-intensas.png';
import Drenagem from '../../imgs/Deficiencia-de-drenagem.png';
import Urbanizacao from '../../imgs/Urbanizacao.png';

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
const ProblemaContainer = styled.section`
    background: linear-gradient(#ffffff, #e8e8e8 15%);
    text-align: center;
`
const Container = styled.div`

@media (min-width: 1100px) {
    padding: 2em 0 4em 0;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
}
`
const ProblemaImg = styled.figure`
    margin-top: 1em;
    padding: 1em 1em 0 1em;
    img{
        max-width: 100%;
        border-radius: 5em;

    }

    @media (min-width: 1100px) {
        margin: 0;
        padding: 1em;
        text-align: center;
        grid-column: 1;

        img{
            max-width: 100%;
        }
    }
`
const ProblemaTxT = styled.div`
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
        line-height: 1.5;
      }

      @media (min-width: 1100px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2em;
        text-align: center;
        grid-column: 2;
    }
`
const CausaContainer = styled.section`
    width: auto;
    background: linear-gradient(#e8e8e8, #ffffff 15%);
    padding: 1em;
    h1{
        margin-top: 1em;
        margin-bottom: 0.5em;
        font-size: 3em;
        text-align: center;
        color: #0f62fe;
        font-weight: bold;
    }
`
const CausaContent = styled.div`

@media (min-width: 1100px) {
    display: flex;
    padding: 1em;
}
`
const Card = styled.div`
    position: relative;
    background: #f4f4f4;
    text-align: center;
    align-items: center;
    border-radius: 1em;
    box-shadow: 0 1.6875em 1.6875em rgba(214, 214, 214, 0.8);
    margin-bottom: 1em;

    img{
        max-width: 6.25em;
        margin: auto;
    }

    @media (min-width: 1100px) {
        background: transparent;
        box-shadow: none;
        padding: 1em;
        height: 100%;
        margin: 0;
    }

`
const Face1 = styled.div`
    padding: 1em;
    background: #f4f4f4;
    border-radius: 1em 1em 0 0;
    box-shadow: 0 1em 1em rgba(214, 214, 214, 0.8);

`
const Face1Content = styled.div`
 h3{
    margin-top: 0.5em;
    color: #0f62fe;
 }
 @media (min-width: 1100px) {
    h3{
        margin-top: 0;
     }
}
`
const Face2 = styled.div`
    padding: 1em;
    background: #fff;
    border-radius: 0 0 1em 1em;
    box-shadow: 0 1em 1em rgba(214, 214, 214, 0.8);
`
const Face2Content = styled.div`
 padding: 1em;

 @media (min-width: 1100px) {
    display: flex;
    align-items: center;
    padding: 0;
    justify-content: center;
}
`


function MainPage() {
    return (
        <>
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
            <>
                <ProblemaContainer>
                    <Container>
                        <ProblemaImg>
                            <img
                                src={problemaImagem}
                                alt="inundação"></img>
                        </ProblemaImg>
                        <ProblemaTxT>
                            <p>Enchentes em São Paulo</p>
                            <p>São Paulo enfrenta enchentes frequentes, especialmente durante os períodos de chuvas intensas.
                                A rápida expansão urbana, falta de áreas permeáveis, obstrução de córregos e infraestrutura insuficiente
                                tornam a cidade altamente vulnerável.</p>
                            <p>A infraestrutura muitas vezes não suporta o volume de chuvas, resultando em alagamentos e sérios prejuízos econômicos e sociais.</p>
                            <p>A falta de planejamento leva à construção em áreas de risco, agravando a situação. Além disso, a intensa urbanização leva à
                                impermeabilização do solo, dificultando a absorção da água e contribuindo para o acúmulo nas ruas.</p>
                            <p>É vital uma colaboração efetiva entre governos, empresas e a comunidade. Políticas sustentáveis e a gestão responsável da água são essenciais para garantir um
                                futuro seguro e resiliente para a cidade e seus habitantes.</p>

                        </ProblemaTxT>
                    </Container>
                </ProblemaContainer>
            </>
            <>
                <CausaContainer>
                    <h1>Principais causas</h1>
                    <CausaContent>
                        <Card>
                            <Face1>
                                <Face1Content>
                                    <img
                                        src={Chuvas}
                                        alt="Chuva intensa"></img>
                                    <h3>Chuvas intensas</h3>
                                </Face1Content>
                            </Face1>
                            <Face2>
                                <Face2Content>
                                    <p>O clima tropical em que está situada São Paulo sofre com frequência de chuvas intensas,
                                        que podem resultar em deslizamentos e inundações, principalmente em regiões com drenagem
                                        inadequada.</p>
                                </Face2Content>
                            </Face2>
                        </Card>
                        <Card>
                            <Face1>
                                <Face1Content>
                                    <img
                                        src={Drenagem}
                                        alt="Chuva intensa"></img>
                                    <h3>Deficiencia de drenagem</h3>
                                </Face1Content>
                            </Face1>
                            <Face2>
                                <Face2Content>
                                    <p>Sistemas de drenagem insuficientes em São Paulo também podem causar inundações, pois a
                                        água da chuva pode se acumular em regiões baixas e ruas sem saídas ou canais adequados
                                        para direcionar a água para longe das áreas populosas.</p>
                                </Face2Content>
                            </Face2>
                        </Card>
                        <Card>
                            <Face1>
                                <Face1Content>
                                    <img
                                        src={Urbanizacao}
                                        alt="Chuva intensa"></img>
                                    <h3>Urbanização</h3>
                                </Face1Content>
                            </Face1>
                            <Face2>
                                <Face2Content>
                                    <p>Prédios, estradas e outras infraestruturas foram construídas sobre solo natural nos
                                        distritos metropolitanos de São Paulo como resultado da rápida urbanização da cidade,
                                        que diminuiu a capacidade do solo de absorver água e aumentou o escoamento.</p>
                                </Face2Content>
                            </Face2>
                        </Card>
                    </CausaContent>
                </CausaContainer>
            </>
        </>
    );
}

export default MainPage