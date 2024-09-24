// ==UserScript==
// @name         Your Userscript Name
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Your description
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    // Function to load a script
    function loadScript(url, callback) {
        const script = document.createElement('script');
        script.src = url;
        script.onload = callback; // Call the callback after the script loads
        document.head.appendChild(script);
    }

    // Wait for the DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Load local jQuery file
        loadScript(chrome.runtime.getURL('local/jquery.min.js'), function() {
            // Once jQuery is loaded, append the other script
            $.getScript('https://raw.githubusercontent.com/uBlockO/uBO-Scriptlets/master/scriptlets.js')
                .done(function() {
                    console.log("Scriptlets loaded successfully.");
                })
                .fail(function() {
                    console.error("Failed to load scriptlets.");
                });
        });
    });
})();
