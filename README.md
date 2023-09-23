# Addressy

## Overview

This is a Chrome extension that allows you to quickly copy the current webpage's URL in various formats such as Markdown, HTML, or plain text. Whether you're a developer, writer, or simply someone who frequently shares web links, this extension simplifies the process by providing easy access to different URL formats for copying to your clipboard.

## Features

- **Markdown Format:** Copy the URL in a Markdown format with a clickable title.
- **HTML Format:** Copy the URL in HTML format with an anchor tag.
- **Plain Text Format:** Copy the URL in plain text with the title and URL separated by a hyphen.

## How to Use

1. Install the extension from the Chrome Web Store.
2. Navigate to the webpage whose URL you want to copy.
3. Click on the Chrome extension icon to open the extension.
4. Choose the desired format (Markdown, HTML, or plain text) by clicking the corresponding button.

#### Extension in action
<img width="1512" alt="Screenshot 2023-09-23 at 22 18 03" src="https://github.com/nikasulo/addressy/assets/22369973/192428dc-7b97-42f2-bcd7-8a290a2e2359">

5. The URL in your chosen format is now copied to your clipboard.

## Code Overview

The extension is built using JavaScript and the Chrome extension API. Here's an overview of the key functions and how they work:

- `copyMarkdown()`: Copies the current tab's URL in Markdown format.
- `copyHTML()`: Copies the current tab's URL in HTML format.
- `copyPlainText()`: Copies the current tab's URL in plain text format.
- `currentTab()`: Retrieves information about the currently active tab, including its title and URL.
- `copyToClipboard(text)`: Copies the provided text to the clipboard using the `navigator.clipboard.writeText` method.
- `copyUrlInFormat(format)`: Calls the appropriate copy function based on the selected format (Markdown, HTML, or plain text).

The extension also includes event listeners to respond to button clicks and provide user feedback when the URL is successfully copied.

## Installation

To use this extension, follow these steps:

1. Download the extension code or clone the repository.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory where the extension code is located.

## Credits

This Chrome extension was created by [Nikasulo] and is open source. Contributions and feedback are welcome.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have suggestions for improvements, please [open an issue](https://github.com/nikasulo/addressy/issue).

## Disclaimer

This extension is not affiliated with or endorsed by Google Chrome or any other third-party services mentioned herein. Use it responsibly and in accordance with the terms of service of the websites you visit.

---

Thank you for using the Chrome Extension: Copy URL in Format. Enjoy simplified URL copying for your web-related tasks!
