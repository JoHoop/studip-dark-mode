function replace() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        if (
            images[i].src ===
            "https://www.studip.de/fileadmin/portal3/templates/gfx/studip_logo.svg"
        )
            images[i].src = chrome.runtime.getURL("images/stupid-logo.svg");
    }
}

chrome.storage.sync.get(["enabled"], function (result) {
    console.log(`Enabled: ${result.enabled}`);
    if (result.enabled) {
        window.setInterval(replace, 3000);
        replace();
    }
});
