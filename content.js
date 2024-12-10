chrome.storage.local.get(['privacyCounter', 'visitedSites'], ({ privacyCounter = 0, visitedSites = [] }) => {
    const currentSite = window.location.hostname;

    // Check if the site has already been tracked
    if (visitedSites.includes(currentSite)) return;

    // Select all anchor (<a>) tags on the page
    const links = Array.from(document.querySelectorAll('a'));

    // Regex to match "Privacy" or "Terms" (case-insensitive)
    const policyRegex = /\b(?:privacy|terms)\b/i;

    // Check if any link text matches the regex
    const foundPolicyLink = links.some(link => policyRegex.test(link.innerText) && link.href);

    if (foundPolicyLink) {
        // Send message to background.js to update the counter
        browser.runtime.sendMessage({
            action: "checkPrivacyPolicy",
            site: currentSite
        });

        console.log(`Privacy-related link found on ${currentSite}`);
    }
});
