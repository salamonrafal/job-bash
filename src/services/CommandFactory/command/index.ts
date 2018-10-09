import Printer from 'services/Printer';
import { ICommandData } from 'services/Commands/interfaces';
import { IParamCommand } from 'services/CommandInterpreter/interfaces';

export default abstract class CmdAbstract 
{
    protected printService: Printer;

    constructor(printService: Printer)
    {
        this.printService = printService;
    }

    public abstract run(params: IParamCommand[], commandInfo: ICommandData): void;
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

    protected hasParams(params: IParamCommand[]): boolean
    {
        if(params.length > 0)
        {
            return true;
        } else{
            return false;
        }
    }

    protected isParamExists(paramName: string, params: IParamCommand[]): boolean
    {
        for (let i = 0; i < params.length; i++)
        {
            if(params[i].name === paramName)
            {
                return true;
            }
        }

        return false;
    }

    protected getParamValue(paramName: string, shortName: string, params: IParamCommand[]): string | undefined
    {
        if (this.isParamExists(paramName, params) || this.isParamExists(shortName, params))
        {
            for (let i = 0; i < params.length; i++)
            {
                if (params[i].name === paramName || params[i].name === shortName)
                {
                    return params[i].value;
                }
            }
        } else {
            return undefined;
        }
    }
}

