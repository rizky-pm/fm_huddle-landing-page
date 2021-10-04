import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 16px;
    }

    body {
        color: ${(props) => props.theme.colors.white};
        background-color: ${(props) => props.theme.colors.violet};
    }

    body::-webkit-scrollbar {
        width: .75rem;
    }

    body::-webkit-scrollbar-track {
        background: ${(props) => props.theme.colors.softMagenta};
    }

    body::-webkit-scrollbar-thumb {
        background-color: ${(props) =>
            props.theme.colors.white};    /* color of the scroll thumb */
    }
`;

export default GlobalStyles;
