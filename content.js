chrome.storage.local.get(['privacyCounter', 'trackedSites'], ({ privacyCounter = 0, trackedSites = [] }) => {
    const currentSite = window.location.hostname;

    // Check if the site has already been tracked
    if (trackedSites.includes(currentSite)) return;

    // Select all anchor (<a>) tags on the page
    const links = Array.from(document.querySelectorAll('a'));

    // Regex to match "Privacy" or "Terms" (case-insensitive)
    const policyRegex = /\b(?:privacy|terms)\b/i;

    // Check if any link text matches the regex
    const foundPolicyLink = links.some(link => policyRegex.test(link.innerText));

    if (foundPolicyLink) {
        // Increment counter and save the site
        privacyCounter++;
        trackedSites.push(currentSite);

        chrome.storage.local.set({ privacyCounter, trackedSites }, () => {
            console.log(`Privacy-related link found. Count incremented to: ${privacyCounter}`);
        });
    }
});
