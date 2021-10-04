import React from 'react';
import styled from 'styled-components/macro';

import Mockups from '../../images/illustration-mockups.svg';

const ContentContainer = styled.div`
    @media only screen and (${(props) => props.theme.breakpoints.desktop}) {
        display: flex;
        flex-direction: row;
        padding: 0 70px;
    }
`;

const MockupsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MockupsIllustration = styled.img`
    width: 19.0625rem;
    height: auto;
    margin-top: 3.125rem;

    @media only screen and (${(props) => props.theme.breakpoints.tablet}) {
        width: 34.375rem;
    }

    @media only screen and (${(props) => props.theme.breakpoints.desktop}) {
        width: 36.875rem;
    }
`;

const Body = styled.div`
    text-align: center;
    margin-top: 3.75rem;

    @media only screen and (${(props) => props.theme.breakpoints.tablet}) {
        margin-top: 3.125rem;
        padding: 0 6.25rem;
    }

    @media only screen and (${(props) => props.theme.breakpoints.desktop}) {
        text-align: left;
        margin-left: 3.75rem;
        margin-top: 5.625rem;
        padding: 0;
    }
`;

const TitleText = styled.p`
    font-size: 1.5rem;
    font-family: ${(props) => props.theme.fontFamily.headings};
    font-weight: ${(props) => props.theme.fontWeights.semiBold};

    @media only screen and (${(props) => props.theme.breakpoints.tablet}) {
        font-size: 2.375rem;
    }
`;

const DescriptionText = styled.p`
    font-family: ${(props) => props.theme.fontFamily.body};
    margin-top: 1rem;
    line-height: 1.75;
    opacity: 0.85;

    @media only screen and (${(props) => props.theme.breakpoints.tablet}) {
    }

    @media only screen and (${(props) => props.theme.breakpoints.desktop}) {
        width: 29.0625rem;
    }
`;

const RegisterButton = styled.button`
    font-family: ${(props) => props.theme.fontFamily.body};
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.violet};
    border: none;
    margin-top: 1rem;
    width: 12.5rem;
    height: 2.5rem;
    border-radius: 1.25rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0rem 0.1875rem 0.375rem,
        rgba(0, 0, 0, 0.23) 0rem 0.1875rem 0.375rem;
    transition: all ease 0.2s;

    @media only screen and (${(props) => props.theme.breakpoints.tablet}) {
        margin-top: 2rem;
    }

    :hover {
        cursor: pointer;
        transform: translateY(-0.3125rem);
        background-color: ${(props) => props.theme.colors.softMagenta};
        box-shadow: rgba(0, 0, 0, 0.19) 0rem 0.625rem 1.25rem,
            rgba(0, 0, 0, 0.23) 0rem 0.375rem 0.375rem;
    }

    :active {
        transform: translateY(-0.15625rem);
    }
`;

const Content = () => {
    return (
        <ContentContainer>
            <MockupsContainer>
                <MockupsIllustration
                    src={Mockups}
                    alt='Huddle Illustrattion Mockups'
                />
            </MockupsContainer>
            <Body>
                <TitleText>Build The Community Your Fans Will Love</TitleText>
                <DescriptionText>
                    Huddle re-imagines the way we build communities. You have a
                    voice, but so does your audience. Create connections with
                    your users as you engage in genuine discussion.
                </DescriptionText>
                <RegisterButton>Register</RegisterButton>
            </Body>
        </ContentContainer>
    );
};

export default Content;
