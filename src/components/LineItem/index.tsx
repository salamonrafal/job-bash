import * as React from 'react';
import { IProps  } from './interfaces';
import { LineItemStyled } from './styles';

import TransformText from 'services/TransformText';

export default class LineItem extends React.Component <IProps>
{
    public render() 
    {
        const { content, emptyLine, args } = this.props;

        if (!emptyLine)
        {
            const transformText = new TransformText();
            let contentChecked = transformText.replaceStructValueContent(content, args);
            contentChecked = transformText.transformToFormattedText(contentChecked);

            if (/^ *\*{1,1} /.test(content)) {
                return (
                    <LineItemStyled><pre dangerouslySetInnerHTML={{__html: contentChecked}}></pre></LineItemStyled>
                );
            } else {
                return (
                    <LineItemStyled dangerouslySetInnerHTML={{__html: contentChecked}}></LineItemStyled>
                );
            }
            
        } else {
            return (
                <LineItemStyled><br /></LineItemStyled>
            );
        }
    }
}
