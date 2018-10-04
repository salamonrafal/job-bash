import CmdAbstract from "services/CommandFactory/command";

export class HelpCmd extends CmdAbstract 
{
    public run(params: any)
    {
        console.log('Welcome Help');
    }
}