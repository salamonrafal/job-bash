import CmdAbstract from "services/CommandFactory/command";
import { ICommandData, ICommandArgs } from 'services/Commands/interfaces';
import Printer from 'services/Printer';
import Commands from 'services/Commands';
import TransformText from 'services/TransformText';
import CommandInterpreter from 'services/CommandInterpreter';

export class HelpCmd extends CmdAbstract 
{
    public run(params: any[], commandInfo: ICommandData)
    {
        console.log(params);
        if (params.length === 0)
        {
            let transformText: TransformText = new TransformText();
            

            this.printService.printLineNoInfo('');
            this.printService.printLineNoInfo('');
            this.printService.printLineNoInfo('##Command name##: #g' + commandInfo.name + 'g#');
            this.printService.printLineNoInfo('##Command description##: ' + commandInfo.hint);
            this.printService.printLineNoInfo('##Command aliases##: ' + this.createContentAliases(commandInfo.aliases));

            let commandInterpreter: CommandInterpreter = new CommandInterpreter(commandInfo.example);

            this.printService.printLineNoInfo('##Examples##: ' + transformText.transformToFormattedText(commandInterpreter.outputFormatCommand()));
            this.printService.printLineNoInfo('');
            this.printService.printLineNoInfo('##Parameters:##');

            for (let i = 0; i < commandInfo.args.length; i++)
            {
                this.printContentArgs(commandInfo.args[i]);
            }

            this.printService.printLineNoInfo('');
        }
        

        this.endInputMode();
    }

    public input(value: string): void
    {
        this.endInputMode();
    }

    private createContentAliases (aliases: string[]): string
    {
        let content = '';

        for (let i = 0; i < aliases.length; i++)
        {
            if (i < (aliases.length - 1))
            {
                content += '#y'+aliases[i] + 'y# | '; 
            } else {
                content += '#y'+ aliases[i] + 'y# '; 
            }
        }

        return content;
    }

    private printContentArgs (argsInfo: ICommandArgs): void
    {
        this.printService.printLineNoInfo('     #g' + argsInfo.long + 'g#, #g' + argsInfo.short + 'g# &minus; ' + argsInfo.hint + (argsInfo.required ? '#rrequiredr#': ''));
    }
}