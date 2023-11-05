import styled from "styled-components";
import React from 'react';
import Esp32 from '../../imgs/Esp32.png';
import parcerias from '../../imgs/parcerias.png';
import analise_de_dados from '../../imgs/analise_de_dados.png';
import Ultrassonic from '../../imgs/Ultrassonic_sensor.png';
import logo from '../../imgs/galoBanner.png'
import Cloud from '../../imgs/icons/clear.png'
import Umidade from '../../imgs/icons/humidade.png'
import Velocidade from '../../imgs/icons/vento.png'
import FloodHouse from '../../imgs/icons/casa-inundada.png'

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

const SolucaoContent2 = styled.div`
text-align: center;
img{
    max-width: 70%;
}
p{
    font-size: 1.2em;
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

const ClimaContainer = styled.div`
    background: linear-gradient(#e8e8e8, #ffffff 15%);
    padding: 1em;
`
const ClimaContent = styled.section`
 @media (min-width: 1100px){
    display: flex;
    align-items: center;
    justify-content: space-around;
}
`
const Tempo = styled.div`
    padding: 2em;
    box-shadow: 0 1px 20px rgba(214, 214, 214, 0.8);
    border-radius: 2em;
    text-align: center;
    @media (min-width: 1100px){
        width: 22em;
        height: 35em;
    }
`
const TempoTitle = styled.section`
h1{
    font-size: 1.8em;
    font-weight: bold;
 }
`
const TempoSelect = styled.section`
    padding-top: 0.5em;
    select{
        display: flex;
        width: 100%;
        text-align: center;
        padding-left: 10px;
        font-size: 20px;
        outline: none;
        border: none;
        appearance: none;
        border: 1px solid #0f62fe;
        border-radius: 2em;
    }
`
const TempoImg = styled.img`
 max-width: 80%;
`
const TempoInfo = styled.div`
 display: flex;
 flex-direction: column;
`
const TempTxt = styled.div`
padding: 1em;
 p{
    margin: 0;
    font-size: 1.8em;
    font-weight: bold;
 }
`
const TempInfo = styled.div`
padding-top: 1em;
display: flex;
 div:nth-child(1){
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 0;
 }
 div:nth-child(2){
    display: flex;
    align-items: center;
    justify-content: end;
    margin: 0;
 }
 p{
    margin: 0;
    font-size: 1em;
    font-weight: bold;
 }
 img{
    max-width: 30%;
 }
`
const Resultado = styled.div`
    margin-top: 2em;
    padding: 2em;
    box-shadow: 0 1px 20px rgba(214, 214, 214, 0.8);
    border-radius: 2em;
    text-align: center;
    @media (min-width: 1100px){
        width: 48em;
        height: 35em;
        margin: 0;
    }
`
const ResultadoTitle = styled.section`
h1{
    font-size: 1.5em;
    font-weight: bold;
 }
`
const ResultadoImg = styled.img`
 max-width: 50%;
`
const ResultadoInfo = styled.div`
padding-top: 1em;
`
const ResultadoTxt = styled.div`
padding: 1em;
h1{
    font-size: 1.2em;
    font-weight: bold;
}
 p{
    margin: 0;
    font-size: 1em;
 }
`
const ContatoContainer = styled.section`
background: linear-gradient(#ffffff, #e8e8e8 15%);
align-items: center;
padding: 1em;

@media (min-width: 1100px) {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1em;
}
`
const InnerContatoContainer = styled.div`
`
const ContatoContainerHeader = styled.div`
    text-align: center;
    p:first-child {
        font-weight: bold;
        font-size: 3em;
        color: #0f62fe;
    }

@media (min-width: 1100px) {
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    p:first-child {
        font-weight: 800;
        font-size: 4em;
        color: #0f62fe;
    }
    p:nth-child(2) {
        font-weight: 800;
        font-size: 1.4em;
        color: #00000;
        margin-bottom: 30px
    }
}
`
const CardsContainer = styled.div`
margin-top: 1em;

@media (min-width: 1100px) {
    display: flex;
    gap: 7em;
}
`
const SobreCardContainer = styled.div`
    border-radius: 30px;
    background: #fff;
    box-shadow: 0 1em 1em rgba(214, 214, 214, 0.8);
    text-align: center;
    padding: 1em;
    margin-bottom: 1em;

@media (min-width: 1100px) {
    width: 367px;
    height: 400px;
    border-radius: 30px;
    background: #fff;
    box-shadow: 0 1em 1em rgba(214, 214, 214, 0.8);
    display: flex;
    justify-content: center;
    padding: 1em 0 0 0;
    flex-wrap: wrap;
}
`
const SobreCardImgContainer = styled.figure`

    padding: 1em;
    img{
        max-width: 70%;
    }

@media (min-width: 1100px) {
    flex-basis: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65px;
    img{
        width: 20%;
    }
}
`
const CardTextContainer = styled.div`

text-align: center;
color: #000000;
font-size: 1em;
p:first-child {
    font-size: 1.5em;
    font-weight: 800;
    color: #0f62fe;
    padding: 5px
}
button {
    background-color: #D9D9D9;
    border: none;
    height: 50px;
    width: 200px;
    text-align: center;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    color: #757373;
    font-size: 1em;
    font-weight: 700;
    border-radius: 2em;
    margin-top: 30px
}
button:hover {
    background: #0f62fe;
    box-shadow: 0px 2px 10px 5px #97B1BF;
    color: #fff;
}

@media (min-width: 1100px) {
    text-align: center;
    color: #000000;
    font-size: 1em;
    display: inline-block;
    p:first-child {
        font-size: 1.5em;
        font-weight: 800;
        color: #0f62fe;
        margin: 5px
    }
    button {
        background-color: #D9D9D9;
        border: none;
        height: 50px;
        width: 200px;
        text-align: center;
        -webkit-transition-duration: 0.4s;
        transition-duration: 0.4s;
        text-decoration: none;
        overflow: hidden;
        color: #757373;
        font-size: 1em;
        font-weight: 700;
        border-radius: 2em;
        margin-top: 30px
    }
    button:hover {
        background: #0f62fe;
        box-shadow: 0px 2px 10px 5px #97B1BF;
        color: #fff;
    }
    button:active:after {
        padding: 0;
        margin: 0;
        opacity: 1;
        transition: 0s
      }
}
`


function Solucao() {
    return (
        <>
            <SolucaoContainer>
                <h1>Solução</h1>
                <SolucaoContent>
                    <Card>
                        <Face1>
                            <Face1Content>
                                <img
                                    src={Ultrassonic}
                                    alt="Esp32"></img>
                                <h3>Hardware</h3>
                            </Face1Content>
                        </Face1>
                        <Face2>
                            <Face2Content>
                                <p>O Galo Weather utiliza um sensor
                                    ultrassônico para detectar obstruções em bueiros
                                    e gerar notificações na rede.
                                </p>
                            </Face2Content>
                        </Face2>
                    </Card>
                    <Card>
                        <Face1>
                            <Face1Content>
                                <img
                                    src={Esp32}
                                    alt="Chuva intensa"></img>
                                <h3>Software</h3>
                            </Face1Content>
                        </Face1>
                        <Face2>
                            <Face2Content>
                                <p>O software realiza processamento de dados e envio de informações internas e externas (para o usuário).</p>
                            </Face2Content>
                        </Face2>
                    </Card>
                    <Card>
                        <Face1>
                            <Face1Content>
                                <img
                                    src={analise_de_dados}
                                    alt="Esp32"></img>
                                <h3>Analise de Dados</h3>
                            </Face1Content>
                        </Face1>
                        <Face2>
                            <Face2Content>
                                <p>O Galo Weather realiza uma análise de dados meteorológicos e estatísticos para gerar suas previsões.
                                </p>
                            </Face2Content>
                        </Face2>
                    </Card>
                    <Card>
                        <Face1>
                            <Face1Content>
                                <img
                                    src={parcerias}
                                    alt="Parcerias"></img>
                                <h3>Parcerias</h3>
                            </Face1Content>
                        </Face1>
                        <Face2>
                            <Face2Content>
                                <p>Prefeitura da cidade de São Paulo, Defesa Civil
                                    e Secretária de Urbanismo.
                                </p>
                            </Face2Content>
                        </Face2>
                    </Card>

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
            <ClimaContainer>
                <ClimaContent>
                    <Tempo>
                        <TempoTitle>
                            <h1>Escolha sua região</h1>
                        </TempoTitle>
                        <TempoSelect>
                            <select id="cidades1" class="cidades" name="cidades1">
                                <option value="op1">Itaim Bibi</option>
                                <option value="op2">Mocca</option>
                                <option value="op3">Vila Prudente</option>
                                <option value="op4">Tatuapé</option>
                                <option value="op5">Belenzinho</option>
                            </select>
                        </TempoSelect>
                        <TempoImg
                            id="imgSim1"
                            src={Cloud}
                            alt="Clima-img"></TempoImg>
                        <TempoInfo>
                            <TempTxt>
                                <p>20 °C</p>
                                <p>Nublado</p>
                            </TempTxt>
                            <TempInfo>
                                <div>
                                    <img
                                        src={Umidade}
                                        alt="Umidade imagem"></img>
                                    <p>Umidade <br /> 74%</p>
                                </div>
                                <div>
                                    <img
                                        src={Velocidade}
                                        alt="Velocidade imagem"></img>
                                    <p>Velocidade <br /> 88%</p>
                                </div>
                            </TempInfo>
                        </TempoInfo>
                    </Tempo>
                    <Resultado>
                        <ResultadoTitle>
                            <h1> Itaim Bibi</h1>
                        </ResultadoTitle>
                        <ResultadoImg
                            id="imgSim1"
                            src={FloodHouse}
                            alt="Clima-img"></ResultadoImg>
                        <ResultadoInfo>
                            <ResultadoTxt>
                                <h1>Previsão de chuva intensa</h1>
                                <p>A chuva que se aproxima ira alagar a area</p>
                            </ResultadoTxt>
                        </ResultadoInfo>
                    </Resultado>
                </ClimaContent>
            </ClimaContainer>
        </>
    );
}

export default Solucao