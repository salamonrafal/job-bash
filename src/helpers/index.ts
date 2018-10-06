export const ACT_NAME_EXEC_COMMAND = 'execCommand';
export const ACT_NAME_PREVET_DEFAULT = 'preventDefaultAction';
export const ACT_NAME_REMOVE_CHAR = 'backRemoveChar';
export const ACT_NAME_PRINT_HELP = 'printHelp';
export const ACT_NAME_DEFAULT = 'default';

export const handledKeys = {
    'execCommand': ['Enter'],
    'printHelp': ['F1'],
    'preventDefaultAction': [
        'Shift',
        'Control',
        'PageUp',
        'PageDown',
        'Escape',
        'Meta',
        'Tab',
        'Delete',
        'Insert',
        'Home',
        'End',
        'ArrowUp',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'F2',
        'F3',
        'F4',
        'F5',
        'F6',
        'F7',
        'F8',
        'F9',
        'F10',
        'F11',
        'F12',
        'ScrollLock', 
        'CapsLock',
        'ContextMenu',
        'Alt',
        'AltGraph',
        'Dead',
        'Pause',
        '\\',
        '?'
    ],
    'backRemoveChar': ['Backspace']
}

export interface IMappingKey {
    nameAction: string;
    key: string;
}

export const createKeyMapping = (): IMappingKey[] =>
{
    let mapping = [];

    for (let nameAction in handledKeys)
    {
        let arrayKeys: string[] = handledKeys[nameAction];

        for (let i = 0; i < arrayKeys.length; i++)
        {
            mapping.push({'nameAction': nameAction, 'key': arrayKeys[i]});
        }
    }

    return mapping;
}

export const getActionNameForKey = (
    key: string, 
    mappings: IMappingKey[]
): string =>
{
    for (let i = 0; i < mappings.length; i++)
    {
        if (mappings[i].key === key) {
            return mappings[i].nameAction;
        }
    }

    return ACT_NAME_DEFAULT;
}