const marked=require('marked');
const sanitizeHtmlLibrary = require('sanitize-html'); 
const TurndownService=require('turndown');



function sanitizeMarkdownContent(markdownContent){
     const turndownService = new TurndownService();
     const convertedHtml=marked.parse(markdownContent);
// console.log(convertedHtml);
     const sanitizedHtml=sanitizeHtmlLibrary(convertedHtml,{
        allowedTags:sanitizeHtmlLibrary.defaults.allowedTags.concat('img')
     });

    //  console.log(sanitizedHtml);
     const sanitizedMarkdown=turndownService.turndown(sanitizedHtml);
     return sanitizedMarkdown;

}
module.exports=sanitizeMarkdownContent;