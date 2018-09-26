import * as React from 'react';
import { IAppContainerProps, IAppContainerState } from './interfaces';
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/default';
import { ConsoleContainerStyled } from './styles';

// Components
import LineItem from 'components/LineItem';

const terminalStaticWelcome = require('data/statics/welcome.json');

export default class App extends React.Component<IAppContainerProps, IAppContainerState>
{
    constructor (props : IAppContainerProps) 
    {
        super(props);
    }

    public render() 
    {
        return (
            <ThemeProvider theme={theme}>
                <ConsoleContainerStyled>
                    <LineItem content="Welcome to Jobbash version 1.0.4 LTS"></LineItem>
                    <LineItem content="Powered by StepStone"></LineItem>
                    <LineItem emptyLine={true}></LineItem>
                    <LineItem emptyLine={true}></LineItem>
                    <LineItem content="     * _If you need help with all avalible commands just write_: #yhelpy#"></LineItem>
                    <LineItem content="     * _Random_ job?: #yluckyjoby#"></LineItem>
                    <LineItem content="     * _Random_ apply?: #yluckyapplyy#"></LineItem>
                    <LineItem emptyLine={true}></LineItem>
                    <LineItem emptyLine={true}></LineItem>
                    <LineItem content="*** Last visited: #g{lastvisited}g# from #g{clientip}g#" args={{lastvisited: "Yesterday Fri Sep 21 19:32:10 2018", clientip: "93.174.28.62"}}></LineItem>

                    <div>anonymous@stepstone.de:~# <strong>jobs</strong> <i>search</i> <strong><i>--keyword "IT Manager"</i></strong></div>
                </ConsoleContainerStyled>
            </ThemeProvider>
        );
    }
}
