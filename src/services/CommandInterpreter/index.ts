import { IParsedCommand } from "./interfaces";

export default class CommandInterpreter
{
    protected commandsData;
    protected textLine;
    protected parsedCommand;

    public constructor (textLine: string)
    {
        this.commandsData = require('data/commands');
        this.setTextLine(textLine);
    }

    public setTextLine (textLine: string)
    {
        this.textLine = textLine;
        this.parsedCommand = this.parseCommand(this.textLine);
    }

    public getParsedCommand (textLine: string): IParsedCommand
    {
        this.textLine = textLine;
        this.parsedCommand = this.parseCommand(this.textLine);
        return this.parsedCommand;
    }

    public outputFormatCommand(): string
    {
        let contentDisplay = this.textLine;

        if (this.parsedCommand.commandName.length > 0) 
        {
            contentDisplay = contentDisplay.replace(new RegExp('^' + this.escapeString(this.parsedCommand.commandName)), "#y" + this.escapeSpecialChars(this.parsedCommand.commandName) + "y#");
        }

        for (let i = 0; i < this.parsedCommand.params.length; i++)
        {
            let search = "(?<!\#g)" + this.escapeString(this.parsedCommand.params[i].name) + "";
            let replace = "#g" + this.escapeSpecialChars(this.parsedCommand.params[i].name) + "g#"

            if (this.parsedCommand.params[i].value.length > 0)
            {
                search += " (" + this.parsedCommand.params[i].value + ")";
                replace += " __" + this.escapeSpecialChars(this.parsedCommand.params[i].value) + "__";
            }

            contentDisplay = contentDisplay.replace(new RegExp(search), replace);
        }
        

        return contentDisplay;
    }

    private escapeString (content: string): string
    {
        const signs: string[] = ['-', '"', "'", "[", "]", "(", ")", "*", "+", "^", "$", "/", "?", '|'];

        for (let i = 0; i < signs.length; i++)
        {
            content = content.replace(new RegExp('\\' + signs[i], 'gm'), '\\' + signs[i]);
        }

        return content;
    }

    private escapeSpecialChars (content: string): string
    {
        content = content.replace(new RegExp('\\_', 'gm'), '&lowbar;');
        content = content.replace(new RegExp('#', 'gm'), '&num;');
        content = content.replace(new RegExp('\\*', 'gm'), '&ast;');
        content = content.replace(new RegExp('<', 'gm'), '&lt;');
        content = content.replace(new RegExp('>', 'gm'), '&gt;');
        return content;
    }

    private parseCommand (content: string): IParsedCommand
    {
        let returnData = {
            commandName: "",
            params: []
        };

        let commandPattern = /(^[^ \-\-]{3,})/gm;
        let matchesCommand = commandPattern.exec(content);
        
        if (matchesCommand !== undefined && matchesCommand !== null)
        {
            returnData.commandName = matchesCommand[0];
        }

        commandPattern = /(\-\-[^ \-\-]+) ?(("[^\-\-\"]*")|([^ \-\-\"]*))/gm;

        while(null != (matchesCommand = commandPattern.exec(content)))
        {
            returnData.params.push({
                name: matchesCommand[1],
                value: (matchesCommand[2] !== undefined? matchesCommand[2] : '')
            })
        }
    
        return returnData;
    }
}