export interface IParsedCommand 
{
    commandName: string;
    params: IParamCommand[];
}

export interface IParamCommand 
{
    name: string;
    value: string;
}