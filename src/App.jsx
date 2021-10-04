import React from 'react';
import styled from 'styled-components/macro';

import BrandLogo from './images/logo.svg';
import BgMobile from './images/bg-mobile.svg';
import BgDesktop from './images/bg-desktop.svg';

import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

const Container = styled.main`
    background-image: url(${BgMobile});
    background-repeat: no-repeat;
    background-color: ${(props) => props.theme.colors.violet};
    background-size: contain;
    padding: 2.5rem 2.1875rem 0 2.1875rem;
    overflow: hidden;

    @media only screen and (${(props) => props.theme.breakpoints.tablet}) {
        background-image: url(${BgMobile});
        padding: 2.5rem 2.1875rem 1.875rem 2.1875rem;
    }

    @media only screen and (${(props) => props.theme.breakpoints.desktop}) {
        background-image: url(${BgDesktop});
        max-height: 100vh;
    }
`;

const Logo = styled.img`
    width: 7.5rem;

    @media only screen and (${(props) => props.theme.breakpoints.tablet}) {
        width: 12.5rem;
    }
`;

function App() {
    return (
        <Container>
            <Logo src={BrandLogo} alt='Huddle Logo' />
            <Content />
            <Footer />
        </Container>
    );
}

export default App;
