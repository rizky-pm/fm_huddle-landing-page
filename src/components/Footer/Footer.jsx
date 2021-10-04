import React from 'react';
import styled from 'styled-components/macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2.5rem;

    @media only screen and (${(props) => props.theme.breakpoints.tablet}) {
        justify-content: space-between;
    }

    @media only screen and (${(props) => props.theme.breakpoints.desktop}) {
        margin-top: 1.25rem;
        flex-direction: row-reverse;
    }
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 7.5rem;
    height: 1.875rem;
`;

const Icon = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.875rem;
    height: 1.875rem;
    border-radius: 50%;
    border: 0.0625rem solid ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.white};
    transition: all ease 0.2s;

    :hover {
        cursor: pointer;
        border: 0.0625rem solid ${(props) => props.theme.colors.softMagenta};
        color: ${(props) => props.theme.colors.softMagenta};
    }
`;

const Attribution = styled.p`
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fontFamily.body};
    text-align: center;
    font-size: 0.875rem;
    margin-top: 0.625rem;

    @media only screen and (${(props) => props.theme.breakpoints.tablet}) {
        width: 31.25rem;
        height: 1.875rem;
    }

    @media only screen and (${(props) => props.theme.breakpoints.desktop}) {
        text-align: left;
    }
`;

const AttributionLink = styled.a`
    color: inherit;
    transition: all ease 0.2s;
    font-weight: ${(props) => props.theme.fontWeights.semiBold};

    :hover {
        color: ${(props) => props.theme.colors.softMagenta};
        text-decoration: none;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <IconContainer>
                <Icon href='#'>
                    <FontAwesomeIcon icon={faFacebookF} />
                </Icon>
                <Icon href='#'>
                    <FontAwesomeIcon icon={faTwitter} />
                </Icon>
                <Icon href='#'>
                    <FontAwesomeIcon icon={faInstagram} />
                </Icon>
            </IconContainer>
            <Attribution>
                Challenge by{' '}
                <AttributionLink
                    href='https://www.frontendmentor.io?ref=challenge'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Frontend Mentor
                </AttributionLink>
                . Coded by{' '}
                <AttributionLink href='https://github.com/rizky-pm'>
                    Rizky Putra Mahendra
                </AttributionLink>
                .
            </Attribution>
        </FooterContainer>
    );
};

export default Footer;
