import Printer from "services/Printer";
import CommandInterpreter from "services/CommandInterpreter";
import Commands from "services/Commands";
import CmdAbstract from "./command";


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

    public exec (command: string, inputMode: boolean, inputServiceName: string): void
    {
        if(!inputMode)
        {
            this.runCommand(command);
        } else {
            this.inputCommand(command, inputServiceName);
        }
    }

    protected runCommand(command: string): void
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
            this.displayErrorMsg(parsedCommandData.commandName);
        }
    }

    protected inputCommand (command: string, inputServiceName: string): void
    {
        if (this.commands.isCommandExists(inputServiceName))
        {
            const commandData = this.commands.findCommand(inputServiceName);
            let obj = this.createInstance(commandData.serviceName, this.printService);
            obj.input(command, commandData);
        } else {
            this.displayErrorMsg(inputServiceName);
        }
    }

    protected displayErrorMsg (commandName: string): void
    {
        this.printService.printLineNoFormmat('#rSorry!!r# %rCommandr% _r' + commandName + 'r_ %rhas not been recognizedr%');
    }

    protected createInstance(className: string, ...args: any[]): CmdAbstract 
    {
        return new (<any>CmdRegister)[className](...args);
    }

}