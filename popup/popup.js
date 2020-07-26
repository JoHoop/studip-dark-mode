"use strict";

function saveState() {
    chrome.storage.sync.set(
        {
            enabled: document.getElementById("enabled").checked,
        },
        function () {
            reloadIcon();
            reloadPage();
        }
    );
}

function restoreState() {
    chrome.storage.sync.get(["enabled"], function (result) {
        document.getElementById("enabled").checked = result.enabled || false;
        reloadIcon();
    });
}

function reloadIcon() {
    if (document.getElementById("enabled").checked) {
        chrome.browserAction.setIcon({ path: "../images/icon-true.png" });
    } else {
        chrome.browserAction.setIcon({ path: "../images/icon-false.png" });
    }
}

function reloadPage() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.update(tabs[0].id, { url: tabs[0].url });
    });
}

document.addEventListener("DOMContentLoaded", restoreState);
document.getElementById("enabled").addEventListener("click", saveState);
