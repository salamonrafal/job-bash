import Printer from 'services/Printer';
import { ICommandData } from 'services/Commands/interfaces';

export default abstract class CmdAbstract 
{
    protected printService: Printer;

    constructor(printService: Printer)
    {
        this.printService = printService;
    }

    public abstract run(params: any, commandInfo: ICommandData): void;
    public abstract input(value: string, commandInfo: ICommandData): void;

    protected startInputMode(commandName: string): void
    {
        this.printService.enableInputMode();
        this.printService.setInputService(commandName);
    }

    protected endInputMode(): void
    {
        this.printService.disableInputMode();
        this.printService.setInputService('');
    }
}

