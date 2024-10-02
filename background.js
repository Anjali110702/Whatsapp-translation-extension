chrome.commands.onCommand.addListener((command) => {
    if (command === "open_languages") {
        chrome.tabs.create({ url: chrome.runtime.getURL("lan.html") });
    }
});

chrome.runtime.onInstalled.addListener(() => {
    console.log("WhatsApp Translator Extension Installed");
});
