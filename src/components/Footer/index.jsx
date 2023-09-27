import styled from "styled-components";
import React from 'react';
import logo from '../../imgs/galoBanner.png'
import fiap from '../../imgs/FiapLogo.png'

const FooterContainer = styled.div`
    position: absolute;
    height: 15vh;
    width: 100%;
    margin: 0;
    background-color: #0c0c0c;
`
const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    align-items: center;
    img:nth-child(1) {
        width: 200px;
    }
    img:nth-child(2) {
        width: 200px;
    } 
    @media (min-width: 1100px) {
        img:nth-child(1) {
            width: 200px;
        }
        img:nth-child(2) {
            width: 200px;
        } 
    }
`


function Footer(){
    return(
        <>
            <FooterContainer>
                <FooterContent>
                    <img
                        src={logo}
                        alt="GaloIcon"></img>
                    <img 
                        src={fiap}
                        alt="FiapLogo"></img>
                </FooterContent>
            </FooterContainer>
        </>
    )
}

export default Footer