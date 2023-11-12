import styled from "styled-components";
import React from 'react';
import { Element } from 'react-scroll';
import mainGif from '../../imgs/capaGif.gif';
import problemaImagem from '../../imgs/problemaImagem.jpg';
import Urbanização from '../../imgs/Urbanizacao.png';
import Drenagem from '../../imgs/drenagem.jpg';
import Chuva from '../../imgs/chuva.png';
import Esp32 from '../../imgs/Esp32.png';
import parcerias from '../../imgs/parcerias.png';
import analise_de_dados from '../../imgs/analise_de_dados.png';
import Ultrassonic from '../../imgs/Ultrassonic_sensor.png';
import logo from '../../imgs/galoBanner.png'

const Home = styled.section`
`
const HomeContainer = styled.div`
    align-items: start;
    text-align: center;

    @media (min-width: 1100px) {
        margin-top: 6.5em;
        padding: 2em 0 em 0;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: auto auto;
    }
`
const HomeTxt1 = styled.div`
    padding: 1em;
    p {
        font-size: 3em;
        font-weight: bold;
        margin: 0;
        color: #0f62fe;
      }
    @media (min-width: 1100px) {
        padding: 0;
        grid-column-start: 1; 
        grid-column-end: 3;
    }
`
const HomeImg = styled.figure`
    padding: 1em;
    
    img {
        max-width: 100%;
        border-radius: 4em;
    }
    @media (min-width: 1100px) {
        padding: 1em;
        text-align: center;
        grid-column: 2;
        grid-row: 2;
        margin: 0;
        img {
            border-radius: 4em;
        }
    }
`
const HomeTxt2 = styled.div`
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
        padding: 2em;
        text-align: center;
        grid-column: 1;
        grid-row: 2;
    }

`
const HomeVideo = styled.div`
padding: 2em;
text-align: center;
iframe{
    width: 1120px;
    height: 630px;
    border-radius: 20px;
    box-shadow: 0 1em 1em rgba(214, 214, 214, 0.8);
}
`
const ProblemaContainer = styled.section`
    background: linear-gradient(#ffffff, #f0eded 15%);
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
        font-size: 2.5em;
        font-weight: bold;
        color: #0f62fe;
      }

      p {
        margin-bottom: 0.5em;
        font-size: 1.5em;
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
    background: linear-gradient(#f0eded, #ffffff 15%);
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
    grid-column-start: 1;
    grid-column-end: 2;
    padding: 1em;   
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
}
`
const Card = styled.div`
    position: relative;
    background: #f4f4f4;
    text-align: center;
    align-items: center;
    border-radius: 1em;
    margin-bottom: 1em;

    img{
        max-width: 20%;
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

    @media (min-width: 1100px) {
    }

`
const Face1Content = styled.div`
 h3{
    padding-top: 0.6em;
    margin-top: 0.5em;
    color: #0f62fe;
    font-weight: bold;
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
    
    @media (min-width: 1100px) {
    }
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
const SolucaoContainer = styled.section`
    background: linear-gradient(#ffffff, #e8e8e8 15%);
    width: auto;
    padding: 1em;
    h1{
        margin-top: 1em;
        margin-bottom: 0.5em;
        font-size: 3em;
        text-align: center;
        color: #0f62fe;
        font-weight: bold;
    }

    @media (min-width: 1100px) {
        padding: 2em 0 em 0;
        display: grid;
        margin-top: 3em;
        text-align: center;
        grid-template-columns: 60% auto ;
        grid-template-rows: auto auto;

        h1{
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row: 1;
        }
    }
`
const SolucaoContent = styled.div`

@media (min-width: 1100px) {
    grid-column-start: 1;
    grid-column-end: 2;
    padding: 1em;   
    display: grid;
    grid-template-columns: auto auto ;
    grid-template-rows: auto auto ;
}
`
const CardS = styled.div`
    position: relative;
    background: #f4f4f4;
    text-align: center;
    align-items: center;
    border-radius: 1em;
    margin-bottom: 1em;

    img{
        max-width: 20%;
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
const Face1S = styled.div`
    padding: 1em;
    background: #f4f4f4;
    border-radius: 1em 1em 0 0;
    box-shadow: 0 1em 1em rgba(214, 214, 214, 0.8);

    @media (min-width: 1100px) {
    }

`
const Face1ContentS = styled.div`
 h3{
    padding-top: 0.6em;
    margin-top: 0.5em;
    color: #0f62fe;
    font-weight: bold;
 }

 @media (min-width: 1100px) {
    h3{
        margin-top: 0;
     }
}
`
const Face2S = styled.div`
    padding: 1em;
    background: #fff;
    border-radius: 0 0 1em 1em;
    font-size: 1.2em;
    font-weight: bold;
    
    box-shadow: 0 1em 1em rgba(214, 214, 214, 0.8);
    
    @media (min-width: 1100px) {
    }
`
const Face2ContentS = styled.div`
 padding: 1em;

 @media (min-width: 1100px) {
    display: flex;
    align-items: center;
    padding: 0;
    justify-content: center;
}
`

const SolucaoContent2 = styled.div`
text-align: center;
img{
    max-width: 70%;
}
p{
    font-size: 1.6em;
    line-height: 1.2;
    margin-top: 1em;
}

@media (min-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-column-start: 2;
    grid-column-end: 3;
}
`

function MainPage() {
    return (
        <>
            <Element name="Home" id="Home">
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
                            <p>A IBM está dedicada a tornar as cidades mais sustentáveis, buscando soluções inovadoras que equilibrem o
                                desenvolvimento econômico, social e ambiental dos ambientes urbanos. Em nosso projeto, buscamos enfrentar o
                                grave problema dos alagamentos urbanos. Nosso compromisso é contribuir com soluções eficazes para mitigar esses impactos,
                                visando um ambiente mais seguro e habitável para todos, alinhado com os Objetivos de Desenvolvimento Sustentável da ONU.</p>
                        </HomeTxt2>
                    </HomeContainer>
                    <HomeVideo>
                        <iframe src="https://www.youtube.com/embed/-rAZMxnWMe8?si=2cM0xixoIEo928tk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </HomeVideo>
                </Home>
            </Element>
            <Element name="Problema" id="Problema">
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
            </Element>
            <Element name="Causa" id="Causa">
                <CausaContainer>
                    <h1>Principais causas</h1>
                    <CausaContent>
                        <Card>
                            <Face1>
                                <Face1Content>
                                    <img
                                        src={Chuva}
                                        alt="Chuvas_intensas"></img>
                                    <h3>Chuvas Intensas</h3>
                                </Face1Content>
                            </Face1>
                            <Face2>
                                <Face2Content>
                                    <p>O clima tropical em que está situada São Paulo sofre com frequência de chuvas intensas,
                                        que podem resultar em deslizamentos e inundações, principalmente em regiões com drenagem
                                        inadequada.
                                    </p>
                                </Face2Content>
                            </Face2>
                        </Card>
                        <Card>
                            <Face1>
                                <Face1Content>
                                    <img
                                        src={Drenagem}
                                        alt="Deficiencia_drenagem"></img>
                                    <h3>Deficiência de Drenagem</h3>
                                </Face1Content>
                            </Face1>
                            <Face2>
                                <Face2Content>
                                    <p>Sistemas de drenagem insuficientes em São Paulo também podem causar inundações, pois a
                                        água da chuva pode se acumular em regiões baixas e ruas sem saídas ou canais adequados
                                        para direcionar a água adequadamente.
                                    </p>
                                </Face2Content>
                            </Face2>
                        </Card>
                        <Card>
                            <Face1>
                                <Face1Content>
                                    <img
                                        src={Urbanização}
                                        alt="Urbanizacao"></img>
                                    <h3>Urbanização</h3>
                                </Face1Content>
                            </Face1>
                            <Face2>
                                <Face2Content>
                                    <p>Prédios, estradas e outras infraestruturas foram construídas sobre solo natural nos
                                        distritos metropolitanos como resultado da rápida urbanização das cidades,
                                        que diminuiu a capacidade do solo de absorver água e aumentou o escoamento.
                                    </p>
                                </Face2Content>
                            </Face2>
                        </Card>
                    </CausaContent>
                </CausaContainer>
            </Element>
            <Element name='Solucao'>
                <SolucaoContainer>
                    <h1>Solução</h1>
                    <SolucaoContent>
                        <CardS>
                            <Face1S>
                                <Face1ContentS>
                                    <img
                                        src={Ultrassonic}
                                        alt="Esp32"></img>
                                    <h3>Hardware</h3>
                                </Face1ContentS>
                            </Face1S>
                            <Face2S>
                                <Face2ContentS>
                                    <p>O Galo Weather utiliza sensores
                                        físicos para detectar obstruções em bueiros
                                        e gerar notificações na rede.
                                    </p>
                                </Face2ContentS>
                            </Face2S>
                        </CardS>
                        <CardS>
                            <Face1S>
                                <Face1ContentS>
                                    <img
                                        src={Esp32}
                                        alt="Chuva intensa"></img>
                                    <h3>Software</h3>
                                </Face1ContentS>
                            </Face1S>
                            <Face2S>
                                <Face2ContentS>
                                    <p>O software realiza processamento de dados e envio de informações internas e externas (para o usuário).</p>
                                </Face2ContentS>
                            </Face2S>
                        </CardS>
                        <CardS>
                            <Face1S>
                                <Face1ContentS>
                                    <img
                                        src={analise_de_dados}
                                        alt="Esp32"></img>
                                    <h3>Analise de Dados</h3>
                                </Face1ContentS>
                            </Face1S>
                            <Face2S>
                                <Face2ContentS>
                                    <p>O Galo Weather realiza uma análise de dados meteorológicos e estatísticos em suas previsões.
                                    </p>
                                </Face2ContentS>
                            </Face2S>
                        </CardS>
                        <CardS>
                            <Face1S>
                                <Face1ContentS>
                                    <img
                                        src={parcerias}
                                        alt="Parcerias"></img>
                                    <h3>Parcerias</h3>
                                </Face1ContentS>
                            </Face1S>
                            <Face2S>
                                <Face2ContentS>
                                    <p>Prefeitura da cidade de São Paulo, Defesa Civil
                                        e Secretária de Urbanismo.
                                    </p>
                                </Face2ContentS>
                            </Face2S>
                        </CardS>

                    </SolucaoContent>
                    <SolucaoContent2>
                        <img
                            src={logo}
                            alt='logo'
                            className='logo-img'
                        ></img>
                        <p>O "Galo Weather" é um projeto inovador para combater alagamentos urbanos usando tecnlogia.
                            Nele, a união de um software de análise e manipulação de dados e um hardware de monitoramento
                            permitem antecipar enchentes e melhorar a segurança de áreas propensas a alagamentos.</p>
                    </SolucaoContent2>
                </SolucaoContainer>
                VENHA CONHECER NOSSO PROJETO!
            </Element>
        </>
    );
}

export default MainPage