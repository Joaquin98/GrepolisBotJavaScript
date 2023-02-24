// ==UserScript==
// @name			Grepo
// @namespace		Grepobot - Bot for Grepolis
// @description		Grepobot is a automated script that helps you do stuff in Grepolis automaticaly! One of the best Grepolis bots out there.
// @autor			Grepobot
// @verison			3.1
// @include			http://*.grepolis.*/*
// @include			https://*.grepolis.*/*
// @grant GM.xmlHttpRequest
// ==/UserScript==
(function(){
    var script = document.createElement('script'),
        link = document.createElement('link'),
        head = document.getElementsByTagName('head')[0];
    script.type = 'text/javascript';
    link.type = 'text/css';
    link.rel = 'stylesheet';
    script.src = location.protocol+'//cdn.jsdelivr.net/gh/Joaquin98/GrepolisBotJavaScript@main/bot.js?_=' + Math.random();
    link.href = location.protocol+'//bot.grepobot.com/Autobot.css?_=' + Math.random();
    //link.href = location.protocol+'//cdn.jsdelivr.net/gh/Joaquin98/GrepolisBotJavaScript@main/Autobot.css?_=' + Math.random();
    head.appendChild(script);
    head.appendChild(link);
    head.setAttribute('xhttps', 1);
})();
