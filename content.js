chrome.storage.local.get(['privacyCounter', 'trackedSites'], ({ privacyCounter = 0, trackedSites = [] }) => {
    const currentSite = window.location.hostname;

    // Check if the site has already been tracked
    if (trackedSites.includes(currentSite)) return;

    // Get the page content
    const pageText = document.body.innerText;

    // Regex to detect "Privacy" or "Terms"
    const policyRegex = /\b(?:privacy|terms)\b/i;

    // Check if the text matches the regex
    if (policyRegex.test(pageText)) {
        // Increment counter and save the site
        privacyCounter++;
        trackedSites.push(currentSite);

        chrome.storage.local.set({ privacyCounter, trackedSites }, () => {
            console.log(`Privacy-related mentions counted: ${privacyCounter}`);
        });
    }
});
