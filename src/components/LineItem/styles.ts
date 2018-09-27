import styled from 'styled-components';

const LineItemStyled = styled.div `
    pre {
        display inline-block;
    }
`;

const CursorStyled = styled.span `
    display: inline-block;
    background-color: #e0dfdf;
    width: 8px;
    height: 16px;
    margin-left: 5px;
    margin-top: 3px
`;

export {
    LineItemStyled,
    CursorStyled
}