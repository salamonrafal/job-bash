import {ICacheData, ICommandData} from './interfaces';

export default class Commands
{
    private _commandsData: any;
    private _cache: ICacheData; 

    constructor()
    {
        this._commandsData = require('data/commands.json');
        this._cache = {
            commandsMappings: []
        }
        this.populateCache();
    }

    // Static

    static getListCommands(): string[]
    {
        const commandsData = require('data/commands.json');
        let listCommands: string[] = [];

        for(let i = 0; i < commandsData.length; i++)
        {
            listCommands.push(commandsData[i].name);
        }

        return listCommands;
    }

    static getInfoCommand(name: string): ICommandData
    {
        const commandsData = require('data/commands.json');

        for(let i = 0; i < commandsData.length; i++)
        {
            if (commandsData[i].name === name)
            {
                return commandsData[i];
            }
        }

        return {
            name: '',
            hint: '',
            example: '',
            args: [],
            aliases: [],
            serviceName: ''
        };
    }

    // Public

    public isCommandExists(command: string): boolean
    {
        return this.isExists(command);
    }

    public findCommand(command: string): ICommandData
    {
        const normalizedName = this.normalizeName(command);
        return this.searchCommandData(normalizedName);
    }

    // Private

    private populateCache(): void
    {
        let data;

        for (let i = 0; i < this._commandsData.length; i++) 
        {
            data = this._commandsData[i];

            for (let n = 0; n < data.aliases.length; n++)
            {
                this.addToCacheMapping(data.aliases[n], data.name);
            }

            this.addToCacheMapping(data.name, data.name);
        }
    }

    private addToCacheMapping(alias: string, to: string): void
    {
        this._cache.commandsMappings.push({alias: alias, command: to});
    }

    private normalizeName (command: string): string
    {
        for (let i = 0; i < this._cache.commandsMappings.length; i++)
        {
            if(this._cache.commandsMappings[i].alias === command) {
                return this._cache.commandsMappings[i].command;
            }
        }

        return command;
    }

    private isExists(command: string): boolean
    {
        for (let i = 0; i < this._cache.commandsMappings.length; i++)
        {
            if(this._cache.commandsMappings[i].alias === command) {
                return true
            }
        }

        return false;
    }

    private searchCommandData(normalizedName: string): ICommandData
    {
        for (let i = 0; i < this._commandsData.length; i++)
        {
            if (this._commandsData[i].name === normalizedName)
            {
                return this._commandsData[i];
            }
        }
    }
}