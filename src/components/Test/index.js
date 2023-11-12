import React from 'react';
import './style.scss';
import { useState } from 'react';
import Umidade from '../../imgs/icons/humidade.png'
import Velocidade from '../../imgs/icons/vento.png'
import Rain from '../../imgs/icons/rain.png'
import Sun from '../../imgs/icons/clear.png'
import Cloud from '../../imgs/icons/cloud.png'
import Mist from '../../imgs/icons/mist.png'
import Snow from '../../imgs/icons/snow.png'
import FloodHouse from '../../imgs/icons/casa-inundada.png'


function Test() {

    const [opcaoSelecionada, setOpcaoSelecionada] = useState('op1');

    const handleSelectChange = (e) => {
        const novaOpcao = e.target.value;
        setOpcaoSelecionada(novaOpcao);
    };

    const informacoesCidades = {
        op1: {
            nome: 'Itaim Bibi',
            imagemClima: Rain,
            imagemResultado: FloodHouse,
            temperatura: '20 °C',
            temperaturaDescricao: 'Chuvoso',
            umidade: '74%',
            velocidade: '88%',
            resultado: 'Previsão de chuva intensa',
            resultadoDescricao: 'A chuva que se aproxima ira alagar a area',
        },
        op2: {
            nome: 'Mocca',
            imagemClima: Sun,
            imagemResultado: FloodHouse,
            temperatura: '24 °C',
            temperaturaDescricao: 'Ensolarado',
            umidade: '35%',
            velocidade: '18',
            resultado: 'Previsão de chuva intensa',
            resultadoDescricao: 'A chuva que se aproxima ira alagar a area',
        },
        op3: {
            nome: 'Vila Prudente',
            imagemClima: Cloud,
            imagemResultado: FloodHouse,
            temperatura: '20 °C',
            temperaturaDescricao: 'Chuvoso',
            umidade: '74%',
            velocidade: '88%',
            resultado: 'Previsão de chuva intensa',
            resultadoDescricao: 'A chuva que se aproxima ira alagar a area',
        },
        op4: {
            nome: 'Tatuapé',
            imagemClima: Mist,
            imagemResultado: FloodHouse,
            temperatura: '20 °C',
            temperaturaDescricao: 'Chuvoso',
            umidade: '74%',
            velocidade: '88%',
            resultado: 'Previsão de chuva intensa',
            resultadoDescricao: 'A chuva que se aproxima ira alagar a area',
        },
        op5: {
            nome: 'Belenzinho',
            imagemClima: Snow,
            imagemResultado: FloodHouse,
            temperatura: '20 °C',
            temperaturaDescricao: 'Chuvoso',
            umidade: '74%',
            velocidade: '88%',
            resultado: 'Previsão de chuva intensa',
            resultadoDescricao: 'A chuva que se aproxima ira alagar a area',
        },
    };

    return (
        <div className="clima-page">
            <div className="clima-container">
                <div className="clima-content">
                    <div className="tempo">
                        <div className="tempo-title">
                            <h1>Escolha sua região</h1>
                        </div>
                        <div className="tempo-select">
                        <select
                        id="cidades1"
                        name="cidades1"
                        value={opcaoSelecionada}
                        onChange={handleSelectChange}
                        >
                        <option value="op1">Itaim Bibi</option>  
                        <option value="op2">Mocca</option>
                        <option value="op3">Vila Prudente</option>
                        <option value="op4">Tatuapé</option>
                        <option value="op5">Belenzinho</option>
                        </select>
                    </div>
                    <img
                        className="tempo-img"
                        id="imgSim1"
                        src={informacoesCidades[opcaoSelecionada].imagemClima}
                        alt="Clima-img"
                    />
                    <div className="tempo-info">
                        <div className="temp-txt">
                            <p>{informacoesCidades[opcaoSelecionada].temperatura}</p>
                            <p>{informacoesCidades[opcaoSelecionada].temperaturaDescricao}</p>
                        </div>
                        <div className="temp-info">
                            <div>
                                <img src={Umidade} alt="Umidade imagem" />
                                <p>
                                Umidade <br /> {informacoesCidades[opcaoSelecionada].umidade}
                                </p>
                            </div>
                            <div>
                                <img src={Velocidade} alt="Velocidade imagem" />
                                <p>
                                Velocidade <br /> {informacoesCidades[opcaoSelecionada].velocidade}
                                </p>
                            </div>
                        </div>
                        <p></p>
                        <p>*Interface apenas para fins ilustrativos, não refletindo resultados reais.</p>
                    </div>
                </div>
                <div className="resultado">
                    <div className="resultado-title">
                        <h1>{informacoesCidades[opcaoSelecionada].nome}</h1>
                    </div>
                    <img
                        className="resultado-img"
                        id="imgSim1"
                        src={informacoesCidades[opcaoSelecionada].imagemResultado}
                        alt="Clima-img"
                    />
                    <div className="resultado-info">
                        <div className="resultado-txt">
                            <h1>{informacoesCidades[opcaoSelecionada].resultado}</h1>
                            <p>{informacoesCidades[opcaoSelecionada].resultadoDescricao}</p>
                        </div>
                    </div>
                    <p>*Interface apenas para fins ilustrativos, não refletindo resultados reais.</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Test