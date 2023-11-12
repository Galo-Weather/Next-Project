import styled from "styled-components";
import React from 'react';
import Galoicon from '../../imgs/galoIcon.png'
import Fabricio from '../../imgs/time/Fabricio.png'
import GuilhermeA from '../../imgs/time/Guilherme A.png'
import GuilhermeM from '../../imgs/time/Guilherme M.png'
import Matheus from '../../imgs/time/Matheus.png'
import Vinicius from '../../imgs/time/Vinicius.png'
import WppIcon from "../../imgs/icons/whatsapp-icon.png";
import EmailIcon from "../../imgs/icons/email-icon.png";

const AboutContainer = styled.section`
background: linear-gradient(#e8e8e8, #ffffff 15%);
  text-align: center;
  padding: 1em;
  h1{
    margin-bottom: 1em;
  }

  @media (min-width: 1100px) {
    margin-top: 5.5em;
    display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  h1{
    margin-bottom: 1em;
  }
}
`;

const Container = styled.div`

  padding: 1em;
  border-radius: 30px;
  box-shadow: 0 1em 1em rgba(214, 214, 214, 0.8);
  

  @media (min-width: 1100px) {
    display: flex;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
  
`;

const AboutImg = styled.div`
img{
    width: 100%;
    padding: 1em;
}
`;

const AboutTxT = styled.div`
  max-width: 600px;
  padding-top: 1em;
`;

const CardContainer = styled.div`
display:flex;
justify-content: center;
align-items: center;
margin-top: 50px;
flex-wrap: wrap;
`

const Card = styled.div`
width: 325px;
background-color: #0f62fe;
color: #fff;
border-radius: 10px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
overflow: hidden;
margin: 10px;
img{
    width:100%;
    height: 225px;
    object-fit: cover;
}
`

const CardContent = styled.div`
padding: 20px;
h2{
    font-size: 24px;
    margin-bottom: 10px;
}
p{
    font-size: 14px;
    margin-bottom: 20px;
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

function Contato() {

    const handleEmailClick = () => {
        window.location.href = 'mailto:ContatoGaloFiap@gmail.com';
    };

    const sendWppClick = () => {
        window.location.href = 'https://wa.me/+5511963752185';
    };

    return (
        <>
            <>
                <AboutContainer>
                    <h1>Sobre nós</h1>
                    <Container>
                        <AboutImg>
                            <img
                                src={Galoicon}
                                alt="Icone da logo marca">
                            </img>
                        </AboutImg>
                        <AboutTxT>
                            <p> No coração do "Galo Weather" está nossa visão ousada de transformar radicalmente a forma como
                                enfrentamos os desafios dos alagamentos urbanos. Inspirados pelo galo, símbolo tradicionalmente
                                associado à previsão do tempo e à vigilância, buscamos antecipar e mitigar as inundações que impactam
                                comunidades em áreas urbanas. Assim como o galo anuncia o amanhecer, queremos antever e preparar as cidades
                                para lidar proativamente com as intempéries climáticas, integrando tecnologia inovadora e análise de dados para
                                criar cidades mais seguras e resilientes.</p>

                            <p>A escolha do galo como nosso símbolo vai além da previsão do tempo; ele representa nossa missão de despertar a
                                consciência e ação preventiva diante das inundações. Assim como o galo é vigilante e anuncia mudanças climáticas,
                                nós, no "Galo Weather", aspiramos a ser a voz que alerta e mobiliza comunidades para se prepararem e se protegerem.
                                Nossa missão é utilizar a sabedoria da natureza, combinada com a inovação tecnológica, para forjar um futuro onde
                                as cidades possam enfrentar os desafios climáticos, garantindo segurança e bem-estar para todos.</p>
                        </AboutTxT>
                    </Container>
                </AboutContainer>

                <CardContainer>

                    <Card>
                        <img
                            src={Fabricio}
                            alt="Integrante do grupo Galo">
                        </img>
                        <CardContent>
                            <h2>Fabrício Saavedra</h2>
                            <p>RM 97631</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <img
                            src={GuilhermeA}
                            alt="Integrante do grupo Galo">
                        </img>
                        <CardContent>
                            <h2>Guilherme Akio</h2>
                            <p>RM 98582</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <img
                            src={GuilhermeM}
                            alt="Integrante do grupo Galo">
                        </img>
                        <CardContent>
                            <h2>Guilherme Morais</h2>
                            <p>RM 551981</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <img
                            src={Matheus}
                            alt="Integrante do grupo Galo">
                        </img>
                        <CardContent>
                            <h2>Matheus Motta</h2>
                            <p>RM 550352</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <img
                            src={Vinicius}
                            alt="Integrante do grupo Galo">
                        </img>
                        <CardContent>
                            <h2>Vinicius Buzato</h2>
                            <p>RM 99125</p>
                        </CardContent>
                    </Card>

                </CardContainer>

            </>
            <>
                <ContatoContainer>
                    <InnerContatoContainer>
                        <ContatoContainerHeader>
                            <p>Entre em contato</p>
                            <p>Nós adoraríamos ouvir você. Aqui como você pode chegar até nós</p>
                        </ContatoContainerHeader>
                        <CardsContainer>
                            <SobreCardContainer>
                                <SobreCardImgContainer>
                                    <img
                                        src={WppIcon}
                                        alt="Ícone de whatsApp">
                                    </img>
                                </SobreCardImgContainer>
                                <CardTextContainer>
                                    <p>Contato via WhatsApp</p>
                                    <p>Em caso de dúvidas, entre em contato!</p>
                                    <p>Nosso atendimento é das 08:00 as 18:00, com respostas em até 24 horas durante dias úteis</p>
                                    <button onClick={sendWppClick}>Clique aqui</button>
                                </CardTextContainer>
                            </SobreCardContainer>
                            <SobreCardContainer>
                                <SobreCardImgContainer>
                                    <img
                                        src={EmailIcon}
                                        alt="Ícone de email">
                                    </img>
                                </SobreCardImgContainer>
                                <CardTextContainer>
                                    <p>Contato via Email</p>
                                    <p>Em caso de dúvidas, entre em contato!</p>
                                    <p>Seu email será respondidoem até 24 horas durante dias úteis</p>
                                    <button onClick={handleEmailClick}>Clique aqui</button>
                                </CardTextContainer>
                            </SobreCardContainer>
                        </CardsContainer>
                    </InnerContatoContainer>
                </ContatoContainer>
            </>
        </>
    );
}

export default Contato;