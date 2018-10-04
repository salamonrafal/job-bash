import * as React from 'react';
import { IAppContainerProps, IAppContainerState } from './interfaces';
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/default';
import { ConsoleContainerStyled } from './styles';

// Components
import LineItem from 'components/LineItem';
import ActiveLine from 'components/ActiveLine';


// Services
import Printer from 'services/Printer';
import CommandFactory from 'services/CommandFactory';

// Data
const terminalStaticWelcome = require('data/statics/welcome.json');

export default class App extends React.Component<IAppContainerProps, IAppContainerState>
{

    private printService: Printer;
    private commandFactory: CommandFactory;

    constructor (props : IAppContainerProps) 
    {
        super(props);

        this.state = {
            line: "",
            lines: [],
            user: "anonymous",
            domain: "stepstone.de",
            bashPrefix: ":~#",
            inputMode: false
        }

        this.eventUpdateLine = this.eventUpdateLine.bind(this);
        this.eventAddLineToDisplay = this.eventAddLineToDisplay.bind(this);
        this.handleKeyPressTerminal = this.handleKeyPressTerminal.bind(this);
    }

    public componentWillMount () {
        const {user, domain, bashPrefix}= this.state;

        document.addEventListener("keydown", this.handleKeyPressTerminal, false);

        this.printService = new Printer(user, domain, bashPrefix, this.eventAddLineToDisplay);
        this.printService.printWelcomePage();
        this.commandFactory = new CommandFactory(this.printService);
    }

    public render() 
    {
        const {line, lines, user, domain, bashPrefix}= this.state;
        let linesDisplay = this.displayByLines(lines, {lastvisited: "Yesterday Fri Sep 21 19:32:10 2018", clientip: "93.174.28.62"});

        return (
            <ThemeProvider theme={theme}>
                <ConsoleContainerStyled>
                    {linesDisplay}
                    <ActiveLine user={user} domain={domain} bashPrefix={bashPrefix} line={line}></ActiveLine>
                </ConsoleContainerStyled>
            </ThemeProvider>
        );
    }

    // Handle actions

    public handleKeyPressTerminal (event): void 
    {
        const { line } = this.state;

        switch (event.key)
        {
            case 'Enter':
                event.preventDefault();
                this.printService.printSelectedLine(this.state.line);
                this.commandFactory.exec(this.state.line);
                this.setState({
                    line: ""
                });
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
                this.eventUpdateLine(line.substring(0, line.length - 1));
                break;

            default:
                this.eventUpdateLine(line+event.key);
            break;
        }
    }

    // Events

    public eventUpdateLine (content: string): void
    {
        this.setState({
            line: content
        })
    }

    public eventAddLineToDisplay(line) 
    {
        const { lines } = this.state;
        let newLines = lines;
        newLines.push(line);

        this.setState({
            lines: newLines
        });
    }

    // Protected 

    protected displayByLines(lines: string[], args: any)
    {
        let displayLines = [];

        for (let i = 0; i < lines.length; i++) {
            let content = lines[i];

            if (content !== "")
            {
                displayLines.push (
                    <LineItem content={content} args={args}></LineItem>
                );
            } else {
                displayLines.push (
                    <LineItem emptyLine={true}></LineItem>
                );
            }
            
        }

        return displayLines;
    }

    // Private
}
