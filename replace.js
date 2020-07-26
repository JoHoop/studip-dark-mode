function replace() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        if (
            images[i].src ===
            "https://www.studip.de/fileadmin/portal3/templates/gfx/studip_logo.svg"
        )
            images[i].src = "images/stupid-logo.svg";
    }
}

chrome.storage.sync.get(["enabled"], function (result) {
    console.log(`Enabled: ${result.enabled}`);
    if (result.enabled) {
        var css = document.createElement("style");
        css.innerHTML =
            'img { content: url("images/stupid-logo.svg") !important; }';
        document.body.appendChild(css);
        window.setInterval(replace, 3000);
        replace();
    }
});
