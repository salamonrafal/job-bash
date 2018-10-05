import * as React from 'react';
import { IProps  } from './interfaces';
import { ActiveLineStyled } from './styles';
import CommandInterpreter from 'services/CommandInterpreter';

import LineItem from 'components/LineItem';


export default class ActiveLine extends React.Component <IProps>
{
    public render() 
    {
        const {user, domain, bashPrefix, line, mode} = this.props;
        let commandInterpreter = new CommandInterpreter(line);
        let content: string;

        if (!mode) {
            let lineDisplay = commandInterpreter.outputFormatCommand();
            content = `${user}@${domain}${bashPrefix} ${lineDisplay}`;
        } else {
            content = `${line}`;
        }

        return (
            <ActiveLineStyled>
                <LineItem content={content} cursor={true}></LineItem>
            </ActiveLineStyled>
      )
    }
}
