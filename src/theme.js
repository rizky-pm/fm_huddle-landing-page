import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

export const theme = {
    colors: {
        violet: 'hsl(257, 40%, 49%)',
        softMagenta: 'hsl(300, 69%, 71%)',
        white: '#FEFAFF',
    },
    fontFamily: {
        headings: "'Poppins', sans-serif",
        body: "'Open Sans', sans-serif",
    },
    fontWeights: {
        regular: 400,
        semiBold: 600,
    },
    breakpoints: {
        smartphone: 'max-width: 480px',
        tablet: 'min-width: 481px',
        desktop: 'min-width: 769px',
        largeDesktop: 'min-width: 1281px',
    },
};

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
