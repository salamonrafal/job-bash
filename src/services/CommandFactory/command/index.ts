import Printer from 'services/Printer';
import { ICommandData } from 'services/Commands/interfaces';

export default abstract class CmdAbstract 
{
    protected printService: Printer;

    constructor(printService: Printer)
    {
        this.printService = printService;
    }

    abstract run(params: any, commandInfo: ICommandData);
}

