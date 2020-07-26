"use strict";

function save() {
    chrome.storage.sync.set(
        {
            enabled: document.getElementById("enabled").checked,
        },
        function () {
            reload();
        }
    );
}

function restore() {
    chrome.storage.sync.get(["enabled"], function (result) {
        document.getElementById("enabled").checked = result.enabled || false;
    });
}

function reload() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.update(tabs[0].id, { url: tabs[0].url });
    });
}

document.addEventListener("DOMContentLoaded", restore);
document.getElementById("enabled").addEventListener("click", save);
