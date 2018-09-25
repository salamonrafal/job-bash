import * as React from 'react';
import {IAppContainerProps, IAppContainerState} from './interfaces';
import {ThemeProvider} from 'styled-components'
import {theme} from 'theme/default';

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
                <div>
                    <div>Here is</div> 
                    <div>Example</div>
                </div>
            </ThemeProvider>
        );
    }
}
