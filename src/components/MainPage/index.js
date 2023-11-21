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
import './Mainpage.scss'

function MainPage() {
    const sendTestClick = () => {
        window.location.href = '/TestProject';
    };
    return (
        <>
            <Element name="Home" id="Home">
                <Home>
                    <div className="HomeContainer">
                        <div className="HomeTxt1">
                            <p>Cidades Sustentáveis:</p>
                            <p>O desafio</p>
                        </div>
                        <div className="HomeImg">
                            <img
                                src={mainGif}
                                alt='gif sustentabilidade'></img>
                        </div>
                        <div className="HomeTxt2">
                            <p>O Desafio da IBM:</p>
                            <p>A IBM está dedicada a tornar as cidades mais sustentáveis, buscando soluções inovadoras que equilibrem o
                                desenvolvimento econômico, social e ambiental dos ambientes urbanos. Em nosso projeto, buscamos enfrentar o
                                grave problema dos alagamentos urbanos. Nosso compromisso é contribuir com soluções eficazes para mitigar esses impactos,
                                visando um ambiente mais seguro e habitável para todos, alinhado com os Objetivos de Desenvolvimento Sustentável da ONU.</p>
                        </div>
                    </div>
                    <div className="HomeVideo">
                        <iframe src="https://www.youtube.com/embed/-rAZMxnWMe8?si=2cM0xixoIEo928tk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </Home>
            </Element>
            <Element name="Problema" id="Problema">
                <div className="ProblemaContainer">
                    <div className="Container">
                        <div className="ProblemaImg">
                            <img
                                src={problemaImagem}
                                alt="inundação"></img>
                        </div>
                        <div className="ProblemaTxT">
                            <p>Enchentes em São Paulo</p>
                            <p>São Paulo enfrenta enchentes frequentes, especialmente durante os períodos de chuvas intensas.
                                A rápida expansão urbana, falta de áreas permeáveis, obstrução de córregos e infraestrutura insuficiente
                                tornam a cidade altamente vulnerável.</p>
                            <p>A infraestrutura muitas vezes não suporta o volume de chuvas, resultando em alagamentos e sérios prejuízos econômicos e sociais.</p>
                            <p>A falta de planejamento leva à construção em áreas de risco, agravando a situação. Além disso, a intensa urbanização leva à
                                impermeabilização do solo, dificultando a absorção da água e contribuindo para o acúmulo nas ruas.</p>
                            <p>É vital uma colaboração efetiva entre governos, empresas e a comunidade. Políticas sustentáveis e a gestão responsável da água são essenciais para garantir um
                                futuro seguro e resiliente para a cidade e seus habitantes.</p>

                        </div>
                    </div>
                </div>
            </Element>
            <Element name="Causa" id="Causa">
                <div className="CausaContainer">
                    <h1>Principais causas</h1>
                    <div className="CausaContent">
                        <div className="Card">
                            <div className="Face1">
                                <div className="Face1Content">
                                    <img
                                        src={Chuva}
                                        alt="Chuvas_intensas"></img>
                                    <h3>Chuvas Intensas</h3>
                                </div>
                            </div>
                            <div className="Face2">
                                <div className="Face2Content">
                                    <p>O clima tropical em que está situada São Paulo sofre com frequência de chuvas intensas,
                                        que podem resultar em deslizamentos e inundações, principalmente em regiões com drenagem
                                        inadequada.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="Card">
                            <div className="Face1">
                                <div className="Face1Content">
                                    <img
                                        src={Drenagem}
                                        alt="Deficiencia_drenagem"></img>
                                    <h3>Deficiência de Drenagem</h3>
                                </div>
                            </div>
                            <div className="Face2">
                                <div className="Face2Content">
                                    <p>Sistemas de drenagem insuficientes em São Paulo também podem causar inundações, pois a
                                        água da chuva pode se acumular em regiões baixas e ruas sem saídas ou canais adequados
                                        para direcionar a água adequadamente.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="Card">
                            <div className="Face1">
                                <div className="Face1Content">
                                    <img
                                        src={Urbanização}
                                        alt="Urbanizacao"></img>
                                    <h3>Urbanização</h3>
                                </div>
                            </div>
                            <div className="Face2">
                                <div className="Face2Content">
                                    <p>Prédios, estradas e outras infraestruturas foram construídas sobre solo natural nos
                                        distritos metropolitanos como resultado da rápida urbanização das cidades,
                                        que diminuiu a capacidade do solo de absorver água e aumentou o escoamento.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
            <Element name='Solucao'>
                <div className="SolucaoContainer">
                    <h1>Solução</h1>
                    <div className="SolucaoContent">
                        <div className="CardS">
                            <div className="Face1S">
                                <div className="Face1ContentS">
                                    <img
                                        src={Ultrassonic}
                                        alt="Esp32"></img>
                                    <h3>Hardware</h3>
                                </div>
                            </div>
                            <div className="Face2S">
                                <div className="Face2ContentS">
                                    <p>O Galo Weather utiliza sensores
                                        físicos para detectar obstruções em bueiros
                                        e gerar notificações na rede.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="CardS">
                            <div className="Face1S">
                                <div className="Face1ContentS">
                                    <img
                                        src={Esp32}
                                        alt="Chuva intensa"></img>
                                    <h3>Software</h3>
                                </div>
                            </div>
                            <div className="Face2S">
                                <div className="Face2ContentS">
                                    <p>O software realiza processamento de dados e envio de informações internas e externas (para o usuário).</p>
                                </div>
                            </div>
                        </div>
                        <div className="CardS">
                            <div className="Face1S">
                                <div className="Face1ContentS">
                                    <img
                                        src={analise_de_dados}
                                        alt="Esp32"></img>
                                    <h3>Analise de Dados</h3>
                                </div>
                            </div>
                            <div className="Face2S">
                                <div className="Face2ContentS">
                                    <p>O Galo Weather realiza uma análise de dados meteorológicos e estatísticos em suas previsões.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="CardS">
                            <div className="Face1S">
                                <div className="Face1ContentS">
                                    <img
                                        src={parcerias}
                                        alt="Parcerias"></img>
                                    <h3>Parcerias</h3>
                                </div>
                            </div>
                            <div className="Face2S">
                                <div className="Face2ContentS">
                                    <p>Prefeitura da cidade de São Paulo, Defesa Civil
                                        e Secretária de Urbanismo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="SolucaoContent2">
                        <img
                            src={logo}
                            alt='logo'
                        ></img>
                        <p>O "Galo Weather" é um projeto inovador para combater alagamentos urbanos usando tecnlogia.
                            Nele, a união de um software de análise e manipulação de dados e um hardware de monitoramento
                            permitem antecipar enchentes e melhorar a segurança de áreas propensas a alagamentos.</p>
                        <div className="TestProject">
                            <h2>Quer entender como funciona?</h2>
                            <button onClick={sendTestClick}>Faça o teste</button>
                        </div>
                    </div>
                </div>
            </Element>
            <>
            </>
        </>
    );
}

export default MainPage