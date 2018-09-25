import * as React from 'react';
import { IAppContainerProps, IAppContainerState } from './interfaces';
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/default';
import { ConsoleContainerStyled } from './styles';

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
                    <div>Welcome to Jobbash version 1.0.4 LTS</div> 
                    <div>Powered by StepStone</div>
                    <div><br /></div>
                    <div>
                        <pre>   * If you need help with all avalible commands just write: <strong>help</strong></pre>
                        <pre>   * Random job?: <strong>luckyjob</strong></pre>
                        <pre>   * Random apply?: <strong>luckyapply</strong></pre>
                    </div>
                    <div><br /></div>
                    <div> *** Last visited: Yesterday Fri Sep 21 19:32:10 2018 from 93.174.28.62</div>
                    <div>anonymous@stepstone.de:~# <strong>jobs</strong> <i>search</i> <strong><i>--keyword "IT Manager"</i></strong></div>
                </ConsoleContainerStyled>
            </ThemeProvider>
        );
    }
}
