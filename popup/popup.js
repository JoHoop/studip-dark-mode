"use strict";

function save() {
    chrome.storage.sync.set(
        {
            enabled: document.getElementById("enabled").checked,
        },
        function () {
            document.getElementById("submit").value = "Saved";
        }
    );
}

function restore() {
    chrome.storage.sync.get(["enabled"], function (result) {
        document.getElementById("enabled").checked = result || false;
    });
}

function changed() {
    document.getElementById("submit").value = "Save";
}

function enter(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        save();
    }
}

document.addEventListener("DOMContentLoaded", restore);
document.getElementById("submit").addEventListener("click", save);
document.getElementById("enabled").addEventListener("click", changed);
