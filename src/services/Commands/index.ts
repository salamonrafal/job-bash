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

    public isCommandExists(command: string): boolean
    {
        return this.isExists(command);
    }

    public findCommand(command: string): ICommandData
    {
        const normalizedName = this.normalizeName(command);
        return this.searchCommandData(normalizedName);
    }

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