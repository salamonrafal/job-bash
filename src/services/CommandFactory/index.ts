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

    public exec (command: string)
    {
        const parsedCommandData = this.commandInterpreter.getParsedCommand(command);

        if (this.commands.isCommandExists(parsedCommandData.commandName))
        {
            const commandData = this.commands.findCommand(parsedCommandData.commandName);
            let obj = this.createInstance(commandData.serviceName);
            obj.run(parsedCommandData.params, commandData);
            console.log(commandData);
        } else {
            console.log('command not exists');
        }

        console.log(parsedCommandData);
        
    }

    protected createInstance(className: string, ...args: any[]) 
    {
        return new (<any>CmdRegister)[className](...args);
    }

}