import * as React from 'react';
import { IAppContainerProps, IAppContainerState } from './interfaces';
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/default';
import { ConsoleContainerStyled } from './styles';

// Components
import LineItem from 'components/LineItem';
import ActiveLine from 'components/ActiveLine';

const terminalStaticWelcome = require('data/statics/welcome.json');

export default class App extends React.Component<IAppContainerProps, IAppContainerState>
{
    constructor (props : IAppContainerProps) 
    {
        super(props);

        this.state = {
            line: "",
            lines: [],
            user: "anonymous",
            domain: "stepstone.de",
            bashPrefix: ":~#"
        }

        this.updateLine = this.updateLine.bind(this);
        this.handleKeyPressTerminal = this.handleKeyPressTerminal.bind(this);
    }

    public componentWillMount () {
        document.addEventListener("keydown", this.handleKeyPressTerminal, false);
    }

    public render() 
    {
        const {line, lines, user, domain, bashPrefix}= this.state;

        return (
            <ThemeProvider theme={theme}>
                <ConsoleContainerStyled>
                    <LineItem content="Welcome to Jobbash version 1.0.4 LTS"></LineItem>
                    <LineItem content="Powered by StepStone"></LineItem>
                    <LineItem emptyLine={true}></LineItem>
                    <LineItem emptyLine={true}></LineItem>
                    <LineItem content="     * _If you need help with all avalible commands just write_: #yhelpy#"></LineItem>
                    <LineItem content="     * _Random job_?: #yluckyjoby#"></LineItem>
                    <LineItem content="     * _Random apply_?: #yluckyapplyy#"></LineItem>
                    <LineItem emptyLine={true}></LineItem>
                    <LineItem emptyLine={true}></LineItem>
                    <LineItem content="*** Last visited: #g{lastvisited}g# from #g{clientip}g#" args={{lastvisited: "Yesterday Fri Sep 21 19:32:10 2018", clientip: "93.174.28.62"}}></LineItem>

                    <ActiveLine user={user} domain={domain} bashPrefix={bashPrefix} line={line}></ActiveLine>
                </ConsoleContainerStyled>
            </ThemeProvider>
        );
    }

    public handleKeyPressTerminal (event): void 
    {
        const { line } = this.state;
        console.log(event.charCod);
        console.log(event.key);

        switch (event.key)
        {
            case 'Enter':
                // Implement
                break;
            case 'Shift':
            case 'Control':
            case 'PageUp':
            case 'PageDown':
            case 'Escape':
            case 'Meta':
            case 'Tab':
            case 'Delete':
            case 'Insert':
            case 'Home':
            case 'End':
            case 'ArrowUp':
            case 'ArrowDown':
            case 'ArrowLeft':
            case 'ArrowRight':
            case 'F1':
            case 'F2':
            case 'F3':
            case 'F4':
            case 'F5':
            case 'F6':
            case 'F7':
            case 'F8':
            case 'F9':
            case 'F10':
            case 'F11':
            case 'ScrollLock': 
            case 'CapsLock':
            case 'ContextMenu':
            case 'Alt':
            case 'AltGraph':
                event.preventDefault();
                // Implement
                break;

            case 'Backspace':
                this.updateLine(line.substring(0, line.length - 1));
                break;

            default:
                this.updateLine(line+event.key);
            break;
        }
    }

    public updateLine (content: string): void
    {
        this.setState({
            line: content
        })
    }
}
