export default class TransformText
{
    private tableFormatting;

    constructor () {
        this.tableFormatting = [
            {
                signChrStart: "#y",
                signChrEnd: "y#",
                tagStart: "<strong class=\"yellow\">",
                tagEnd: "</strong>",
            },
            {
                signChrStart: "#g",
                signChrEnd: "g#",
                tagStart: "<strong class=\"grey\">",
                tagEnd: "</strong>",
            },
            {
                signChrStart: "_",
                signChrEnd: "_",
                tagStart: "<i>",
                tagEnd: "</i>",
            },
            {
                signChrStart: "\\*",
                signChrEnd: "\\*",
                tagStart: "<i>",
                tagEnd: "</i>",
            }
        ];
    }

    public transformToFormattedText (content: string): string
    {
        for (let i = 0; i < this.tableFormatting.length; i++)
        {
            const formatingData = this.tableFormatting[i];
            let re = new RegExp("(" + formatingData.signChrStart + "([a-zA-Z0-9 \.:]+)"  + formatingData.signChrEnd +  ")", "g");
            content = content.replace(re, this.getFormatTag('$2', formatingData.tagStart, formatingData.tagEnd));
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

    private getFormatTag (text: string, tagStart: string, tagEnd: string): string
    {
        return tagStart + text + tagEnd;
    }
}