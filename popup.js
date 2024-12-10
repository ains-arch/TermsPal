document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the counter from storage and display it
    chrome.storage.local.get('privacyCounter', (data) => {
        const counter = data.privacyCounter || 0; // Default to 0 if not set
        document.getElementById('privacyCounter').textContent = counter;
    });
});
