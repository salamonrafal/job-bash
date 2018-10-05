import Printer from "services/Printer";
import CommandInterpreter from "services/CommandInterpreter";
import Commands from "services/Commands";

// Command Register
import * as CmdRegister from "./command/commands";

export default class CommandFactory
{
    protected printService: Printer;
    protected commandInterpreter: CommandInterpreter;
    protected commandsData: any;
    protected commands: Commands;

    constructor (printService: Printer)
    {
       this.printService = printService;
       this.commandInterpreter = new CommandInterpreter('');
       this.commands = new Commands();
    }

    public exec (command: string, inputMode: boolean, inputServiceName: string)
    {
        if(!inputMode)
        {

            const parsedCommandData = this.commandInterpreter.getParsedCommand(command);

            if (parsedCommandData.commandName.trim() === '')
            {
                return;
            }

            if (this.commands.isCommandExists(parsedCommandData.commandName))
            {
                const commandData = this.commands.findCommand(parsedCommandData.commandName);
                let obj = this.createInstance(commandData.serviceName, this.printService);
                obj.run(parsedCommandData.params, commandData);
            } else {
                this.printService.printLineNoFormmat('#rSorry!!r# %rCommandr% _r' + parsedCommandData.commandName + 'r_ %rhas not been recognizedr%');
            }

        } else {
            if (this.commands.isCommandExists(inputServiceName))
            {
                const commandData = this.commands.findCommand(inputServiceName);
                let obj = this.createInstance(commandData.serviceName, this.printService);
                obj.input(command, commandData);
            } else {
                this.printService.printLineNoFormmat('#rSorry!!r# %rCommandr% _r' + inputServiceName + 'r_ %rhas not been recognizedr%');
            }
        }
        
    }

    protected createInstance(className: string, ...args: any[]) 
    {
        return new (<any>CmdRegister)[className](...args);
    }

}