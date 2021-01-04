# StupID Dark Mode (WIP)

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/JoHoop/studip-dark-mode/blob/master/LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/JoHoop/studip-dark-mode.svg)](https://github.com/JoHoop/studip-dark-mode/graphs/contributors/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/JoHoop/studip-dark-mode/graphs/commit-activity)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)

Chrome Browser Extension to add dark mode to StupID by injecting a stylesheet.

> StudIP is the campus management platform deployed at several German universities.

Currently only works at the University of Bremen.

Other universities can be supported by adding by their urls to the manifest.

Pull requests would be very much appreciated ✌️

### Install extension from the [Chrome Web Store](https://chrome.google.com/webstore/detail/studip-dark-mode/fagenjpogifjohbjmdlomhkpbipkmeel) (recommended)

or

### Manually load extension into Chrome

1. Clone or download this repository to your machine.
2. Open up `chrome://extensions/` in your browser.
3. Enable `Developer mode` in the top right.
4. Click `Load unpacked extension` in the top left.
5. Select the `chrome-extension` folder from this repository.

or

### Manually load extension into Safari

1. Clone or download this repository to your machine.
2. Double click the `studip-dark-mode.app` from the `safari-extension` folder.
3. Open Safari and choose `Safari > Preferences > Advanced` and then select the `Show Develop menu in menu bar` checkbox.
4. Choose `Develop > Allow Unsigned Extensions`. This will be reset when you quit Safari; you must set it again the next time Safari is launched.
5. Select the Extensions tab and enable `StupID Dark Mode` by selecting the checkbox.
6. Click on the extension in the menu bar and allow forever.

(I'll build an .xcarchive soon that can be signed individually)

![Screenshot](/demo.png)

(When you use unsigned builds, safari stops the extension after a while for security reasons. You can use the extension without any problems by signing it with your personal development certificate.)
