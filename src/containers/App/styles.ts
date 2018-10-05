import styled from 'styled-components';
import { injectGlobal } from 'styled-components';
require('resources/fonts/UbuntuMono-B.ttf');
require('resources/fonts/UbuntuMono-BI.ttf');
require('resources/fonts/UbuntuMono-R.ttf');
require('resources/fonts/UbuntuMono-RI.ttf');

const ConsoleContainerStyled = styled.div `
    background-color: #000;
    color: #fff;
    width: 100%;
    min-height: 100%;
    padding: 5px;
`;

injectGlobal `
    @font-face {
        font-family: "UbuntuMono-R";
        src: url("dist/fonts/UbuntuMono-R.ttf");
    }

    @font-face {
        font-family: "UbuntuMono-B";
        src: url("dist/fonts/UbuntuMono-B.ttf");
    }

    @font-face {
        font-family: "UbuntuMono-RI";
        src: url("dist/fonts/UbuntuMono-RI.ttf");
    }

    @font-face {
        font-family: "UbuntuMono-BI";
        src: url("dist/fonts/UbuntuMono-BI.ttf");
    }

    body {
        margin: 0px;
        padding: 0px;
        height: 100%;
        overflow-x: hidden;
    }

    html, #AppContainer {
        height: 100%;
        font-family: UbuntuMono-R;
        font-size: 16px;
    }

    strong, b {
        font-family: UbuntuMono-B;
    }

    i {
        font-family: UbuntuMono-I;
    }

    pre {
        margin: 0px;
        padding: 0px;
    }

    .yellow {
        color: yellow;
    }

    .grey {
        color: grey;
    }

    .red {
        color: red;
    }
`;

export {
    ConsoleContainerStyled
};