# Whatsapp-translation-extension
## Overview

The **WhatsApp Translator** is a Chrome extension designed to enhance WhatsApp Web by enabling users to translate messages into different languages. Users can select the source and target languages from a pop-up menu, and messages will be translated into a dummy text format (currently using shuffled text as a placeholder for actual translation functionality). This project is transitioning from using translation APIs to a full MERN stack implementation.

## Features

- Translate WhatsApp messages on the web by replacing them with dummy text.
- User-friendly pop-up interface to select source and target languages.
- Local storage of user preferences for language settings.
- Real-time translation of messages detected using a `MutationObserver`.
- Dummy text generation (random shuffling of characters) instead of actual translation for submission.
