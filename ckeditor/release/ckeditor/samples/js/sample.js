﻿CKEDITOR.env.ie&&9>CKEDITOR.env.version&&CKEDITOR.tools.enableHtml5Elements(document);CKEDITOR.config.height=150;CKEDITOR.config.width="auto";
var initSample=function(){var a;a="%REV%"==CKEDITOR.revision?!0:!!CKEDITOR.plugins.get("wysiwygarea");var c=!!CKEDITOR.plugins.get("bbcode");return function(){var b=CKEDITOR.document.getById("editor");c&&b.setHtml("Hello world!\n\nI'm an instance of [url\x3dhttps://ckeditor.com]CKEditor[/url].");a?CKEDITOR.replace("editor"):(b.setAttribute("contenteditable","true"),CKEDITOR.inline("editor"))}}();