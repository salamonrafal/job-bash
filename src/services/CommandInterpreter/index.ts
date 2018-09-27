export default class CommandInterpreter
{
    protected commandsData;

    public constructor ()
    {
        this.commandsData = require('data/commands');
    }

    public outputFormatCommand(content: string): string
    {
        let contentDisplay = content;

        // command --parameters value --another "anothervalue with"
        contentDisplay = contentDisplay.replace(/^([^ ]{3,})/, "#y$1y#");

        let commandPattern = /(^[^ \-\-]{3,})(\-\-[^ ]+)/gm;
        let matchesCommand = commandPattern.exec(content);

        
        console.log(content);
        console.log(matchesCommand);
        console.log(this.commandsData);
        console.log(contentDisplay);

        return contentDisplay;
    }
}