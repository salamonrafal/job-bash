export default class TransformText
{
    private tableFormatting;

    constructor () {
        this.tableFormatting = require('data/formatting.json');
    }

    public transformToFormattedText (content: string): string
    {
        for (let i = 0; i < this.tableFormatting.length; i++)
        {
            const formatingData = this.tableFormatting[i];
            let re = new RegExp("(" + formatingData.signChrStart + '([a-zA-Z0-9 !\(\)\\[\\]\"\.\:\-\\\\`\,\<\>\+\\|\?/\\$%\\^&\']+)'  + formatingData.signChrEnd +  ")", "g");
            content = content.replace(re, formatingData.tagStart + "$2" + formatingData.tagEnd);
        }
        
        return content;
    }

    public replaceStructValueContent (content: string, args: any): string
    {
        if (typeof args === "object") {
            Object.keys(args).forEach((key)=>{
                content = content.replace("{" + key + "}", args[key]);
            });   
        }

        return content
    }
}