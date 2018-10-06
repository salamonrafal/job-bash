import CmdAbstract from "services/CommandFactory/command";
import { ICommandData } from 'services/Commands/interfaces';
import Printer from 'services/Printer';

export class HelpCmd extends CmdAbstract 
{
    public run(params: any, commandInfo: ICommandData)
    {
        this.printService.printLineNoInfo('##Help## Nothing to display line 1');
        this.printService.printLineNoInfo('##Help## Nothing to display line 2');
        this.endInputMode();
    }

    public input(value: string): void
    {
        this.endInputMode();
    }
}