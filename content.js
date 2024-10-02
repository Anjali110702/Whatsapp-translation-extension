console.log("WhatsApp Translator extension loaded");

const sourceLang = localStorage.getItem("sourceLang") || "en";
const targetLang = localStorage.getItem("targetLang") || "es";
console.log(`Initial source language: ${sourceLang}, target language: ${targetLang}`);
// Function to generate dummy text
const generateDummyText = (originalText) => {
    const cleanedText = originalText.trim(); // Remove leading/trailing whitespace
    const characters = cleanedText.split(''); // Split text into characters
    const shuffledCharacters = characters.sort(() => Math.random() - 0.5); // Shuffle characters
    return `${shuffledCharacters.join('')}`; // Return shuffled result
};
const modifyWhatsAppMessages = () => {
    const messages = document.querySelectorAll('.copyable-text');
    console.log(`Found ${messages.length} messages to process.`);

    messages.forEach((message) => {
        const originalText = message.innerText;
        console.log("Original message text:", originalText);
        const dummyText = generateDummyText(originalText);
        message.innerText = dummyText;
        console.log("Updated message with dummy text:", dummyText);
    });
};

const observer = new MutationObserver(() => {
    console.log("Mutation detected - new messages might have been added");
    modifyWhatsAppMessages();
});

function waitForChatContainer() {
    const chatContainer = document.querySelector('#pane-side');
    if (chatContainer) {
        console.log("Starting MutationObserver on the chat container");
        observer.observe(chatContainer, { childList: true, subtree: true });

        modifyWhatsAppMessages();
    } else {
        console.log("Chat container not found yet, retrying...");
        setTimeout(waitForChatContainer, 100); 
    }
}

waitForChatContainer();
