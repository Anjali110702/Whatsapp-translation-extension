# Whatsapp-translation-extension
## Overview

The **WhatsApp Translator** is a Chrome extension designed to enhance WhatsApp Web by enabling users to translate messages into different languages. Users can select the source and target languages from a pop-up menu, and messages will be translated into a dummy text format (currently using shuffled text as a placeholder for actual translation functionality). This project is transitioning from using translation APIs to a full MERN stack implementation.

## Features

- Translate WhatsApp messages on the web by replacing them with dummy text.
- User-friendly pop-up interface to select source and target languages.
- Local storage of user preferences for language settings.
- Real-time translation of messages detected using a `MutationObserver`.
- Dummy text generation (random shuffling of characters) instead of actual translation for submission.

## Process

- `icons/`: Contains icons for the Chrome extension.
- `popup.html`: The HTML file for the pop-up window.
- `popup.js`: JavaScript file for handling user interactions in the pop-up.
- `contentScript.js`: The content script that runs on WhatsApp Web, responsible for detecting and modifying messages.
- `manifest.json`: The configuration file that defines the extension's permissions and files.
- `README.md`: Documentation for the project.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/whatsapp-translator.git
    ```
   
2. **Load the extension in Chrome**:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode" using the toggle in the top-right corner.
   - Click "Load unpacked" and select the directory where you cloned the repository.
   
3. **Using the extension**:
   - Open [WhatsApp Web](https://web.whatsapp.com).
   - Click on the extension icon in the Chrome toolbar.
   - Choose the source and target languages.
   - The extension will replace WhatsApp messages with shuffled dummy text based on your settings.

## How It Works

1. When a user opens WhatsApp Web, the extension runs the `contentScript.js` file, which observes the chat container for new messages using a `MutationObserver`.
2. The messages are processed, and their content is replaced with dummy text generated by shuffling the characters of the original message.
3. Users can select the source and target languages via a pop-up window, which is built using `popup.html` and `popup.js`. Language preferences are stored in `localStorage`.
4. The extension modifies the message text displayed in WhatsApp Web, showing the dummy translation.

## Known Issues

- The extension currently uses shuffled dummy text in place of actual translations.
- Due to WhatsApp Web's dynamic nature, there might be occasional delays in detecting new messages.
- Some custom emoji and media messages are not altered.

## Future Improvements

- Integrate a full MERN stack implementation to handle real-time translation of messages.
- Allow the user to choose between actual translation APIs (once resolved) or custom translation models.
- Improve message detection for non-text elements like emojis, images, and videos.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, feel free to contact the project author:  
**Anjali K S**  
[Your Email Address]  
[Your GitHub Profile](https://github.com/your-username)

