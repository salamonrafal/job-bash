import * as React from 'react';
import { IProps  } from './interfaces';
import { ActiveLineStyled } from './styles';
import CommandInterpreter from 'services/CommandInterpreter';

import LineItem from 'components/LineItem';



export default class ActiveLine extends React.Component <IProps>
{
    public render() 
    {
        const {user, domain, bashPrefix, line} = this.props;
        let content = user + "@" + domain + bashPrefix + " ";
        let commandInterpreter = new CommandInterpreter();
        let lineDisplay = commandInterpreter.outputFormatCommand(line);

        content += lineDisplay;

        return (
            <ActiveLineStyled>
                <LineItem content={content} cursor={true}></LineItem>
            </ActiveLineStyled>
      )
    }
}
