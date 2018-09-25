import * as React from 'react';
import {IAppContainerProps, IAppContainerState} from './interfaces';

export default class App extends React.Component<IAppContainerProps, IAppContainerState>
{
    constructor (props : IAppContainerProps) 
    {
        super(props);
    }

    public render() 
    {
        return (<div>Hello World!</div>)
    }
}
