import styled from "styled-components";
import React from 'react';
import Rain from '../../imgs/icons/rain.png'
import Umidade from '../../imgs/icons/humidade.png'
import Velocidade from '../../imgs/icons/vento.png'
import FloodHouse from '../../imgs/icons/casa-inundada.png'

const ClimaContainer = styled.div`
    background: linear-gradient(#e8e8e8, #ffffff 15%);
    padding: 1em;
    padding-bottom: 5em;
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

function Solucao() {
    return (
        <>
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
                            src={Rain}
                            alt="Clima-img"></TempoImg>
                        <TempoInfo>
                            <TempTxt>
                                <p>20 °C</p>
                                <p>Chuvoso</p>
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