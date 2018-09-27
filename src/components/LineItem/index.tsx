import * as React from 'react';
import { IProps  } from './interfaces';
import { LineItemStyled, CursorStyled } from './styles';

import TransformText from 'services/TransformText';

export default class LineItem extends React.Component <IProps>
{
    public render() 
    {
        const { content, emptyLine, args, cursor } = this.props;

        if (!emptyLine)
        {
            const transformText = new TransformText();
            let contentChecked = transformText.replaceStructValueContent(content, args);
            contentChecked = transformText.transformToFormattedText(contentChecked);
            let cursorText = (<span></span>);

            if (cursor !== undefined && cursor) 
            {
                cursorText = (<CursorStyled></CursorStyled>);
            } 

            if (/^ *\*{1,1} /.test(content)) {
                return (
                    <LineItemStyled><pre dangerouslySetInnerHTML={{__html: contentChecked}}></pre>{cursorText}</LineItemStyled> 
                );
            } else {
                return (
                    <LineItemStyled><span dangerouslySetInnerHTML={{__html: contentChecked}}></span>{cursorText}</LineItemStyled> 
                );
            }
            
        } else {
            return (
                <LineItemStyled><br /></LineItemStyled>
            );
        }
    }
}
