console.log("WhatsApp Translator extension loaded");

const sourceLang = localStorage.getItem("sourceLang") || "en";
const targetLang = localStorage.getItem("targetLang") || "es";
console.log(`Initial source language: ${sourceLang}, target language: ${targetLang}`);

// Improved function to check if a string is a URL
const isUrl = (text) => {
    const urlPattern = new RegExp(
        '(https?:\\/\\/)?' + // protocol (optional)
        '((([a-zA-Z0-9\\-]+)\\.)+[a-zA-Z]{2,})' + // domain name
        '(\\/[a-zA-Z0-9#]+\\/?)?', // path (optional)
        'i'
    );
    return urlPattern.test(text);
};

// Fisher-Yates shuffle to ensure true randomness in shuffling characters
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
};

// Function to generate dummy text while preserving links
const generateDummyText = (originalText) => {
    const words = originalText.split(' '); // Split text into words
    const transformedWords = words.map((word) => {
        if (isUrl(word)) {
            console.log(`Detected URL, skipping shuffle: ${word}`);
            return word; // Keep URLs intact
        }
        // Shuffle the characters of the word
        const characters = word.split('');
        const shuffledCharacters = shuffleArray(characters);
        return shuffledCharacters.join(''); // Return the shuffled word
    });
    return transformedWords.join(' '); // Join words back into a sentence
};

// Function to modify WhatsApp messages
const modifyWhatsAppMessages = () => {
    const messages = document.querySelectorAll('.message-in .selectable-text span, .message-out .selectable-text span');
    console.log(`Found ${messages.length} messages to process.`);

    messages.forEach((message) => {
        const originalText = message.textContent;
        console.log("Generating dummy text for:", originalText);

        if (!originalText) return; // Skip empty messages

        const dummyText = generateDummyText(originalText);
        message.textContent = dummyText; // Update message text with dummy text
        console.log("Generated dummy text:", dummyText);
    });
};

// Mutation observer to detect new messages
const observer = new MutationObserver(() => {
    console.log("Mutation detected - new messages might have been added");
    modifyWhatsAppMessages();
});

// Wait for the chat container to load and start observing
function waitForChatContainer() {
    const chatContainer = document.querySelector('#pane-side');
    if (chatContainer) {
        console.log("Starting MutationObserver on the chat container");
        observer.observe(chatContainer, { childList: true, subtree: true });

        modifyWhatsAppMessages(); // Modify existing messages
    } else {
        console.log("Chat container not found yet, retrying...");
        setTimeout(waitForChatContainer, 100); // Retry every 100ms until the chat container is found
    }
}

waitForChatContainer();
