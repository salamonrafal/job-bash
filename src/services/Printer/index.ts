import CommandInterpreter from "services/CommandInterpreter";

export default class Printer
{

    protected eventStdPrint;
    protected user;
    protected domain;
    protected bashPrefix;
    protected commandInterpreter;

    constructor (user: string, domain: string, bashPrefix: string, eventStdPrint: any) {
        this.eventStdPrint = eventStdPrint;
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

        let contentPrint = this.user + "@" + this.domain + this.bashPrefix + " " + this.commandInterpreter.outputFormatCommand();
        
        this.eventStdPrint(contentPrint);
    }
}