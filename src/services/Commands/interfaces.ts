export interface ICacheData {
    commandsMappings: ICommandMaping[];
}

export interface ICommandMaping {
    alias: string;
    command: string;
}

export interface ICommandArgs {
    short: string;
    long: string;
    hint: string;
    default: string;
    required: boolean;
}

export interface ICommandData {
    name: string;
    hint: string;
    example: string;
    args: ICommandArgs[];
    aliases: string[];
    serviceName: string;
}