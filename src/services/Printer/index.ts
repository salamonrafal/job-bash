import CommandInterpreter from "services/CommandInterpreter";

export default class Printer
{

    protected eventStdPrint;
    protected eventChangeMode;
    protected eventSetInputService;
    protected eventSetInputValue;

    protected user;
    protected domain;
    protected bashPrefix;
    protected commandInterpreter;

    constructor (
        user: string, 
        domain: string, 
        bashPrefix: string, 
        eventStdPrint: any, 
        eventChangeMode: any,
        eventSetInputService: any,
        eventSetInputValue: any
    ) {
        this.eventStdPrint = eventStdPrint;
        this.eventChangeMode = eventChangeMode;
        this.eventSetInputService = eventSetInputService;
        this.eventSetInputValue = eventSetInputValue;

        this.user = user;
        this.domain = domain;
        this.bashPrefix = bashPrefix;

        this.commandInterpreter = new CommandInterpreter('');
    }

    public printWelcomePage ()
    {
        const welcomeLinesData = require('data/statics/welcome.json');
        let item;

        for (let i = 0; i < welcomeLinesData.length; i++)
        {
            item = welcomeLinesData[i];
            this.eventStdPrint(item.content);
        }
    }

    public printSelectedLine (content) 
    {
        this.commandInterpreter.setTextLine(content);
        const contentFormatted = this.commandInterpreter.outputFormatCommand();
        
        this.eventStdPrint(`${this.user}@${this.domain}${this.bashPrefix} ${contentFormatted}`);
    }

    public printLineNoFormmat (content) 
    {
        this.eventStdPrint(`${this.user}@${this.domain}${this.bashPrefix} ${content}`);
    }

    public printLineNoInfo (content)
    {
        this.eventStdPrint(`${content}`);
    }

    public enableInputMode()
    {
        this.eventChangeMode(true);
    }

    public disableInputMode()
    {
        this.eventChangeMode(false);
    }

    public setInputService(serviceName: string)
    {
        this.eventSetInputService(serviceName);
    }

    public setInputValue(value: string)
    {
        this.eventSetInputValue(value);
    }
}