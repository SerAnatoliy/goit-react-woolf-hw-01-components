import styled from 'styled-components';

export const StyledContainer = styled('div')`
width: 100%;

padding-right: 15px;
padding-left: 15px;
margin-right: 0 auto;

    @media (min-width: 375px) {
    width: 375px;
    }

    @media (min-width: 768px) {
        width: 768px;
        padding-left: 32px;
        padding-right: 32px;
    }

    @media (min-width: 1440px){
        width: 1440px;
        padding-left: 60px;
        padding-right: 60px;
    }
    `;