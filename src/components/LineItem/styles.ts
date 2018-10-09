import styled from 'styled-components';

const LineItemStyled = styled.div `
    pre {
        display inline-block;
    }
`;

const CursorStyled = styled.span `
    display: inline-block;
    background-color: #e0dfdf;
    width: 7px;
    height: 14px;
    margin-left: 2px;
    margin-top: 0px
`;

export {
    LineItemStyled,
    CursorStyled
}