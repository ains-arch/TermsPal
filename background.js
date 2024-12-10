// Initialize storage on install
browser.runtime.onInstalled.addListener(() => {
  browser.storage.local.set({ privacyCounter: 0, visitedSites: [] });
});

// Listen for messages from content scripts
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "checkPrivacyPolicy") {
    const siteUrl = message.site;

    browser.storage.local.get(["privacyCounter", "visitedSites"], (data) => {
      const { privacyCounter, visitedSites } = data;

      // Check if this site has already been counted
      if (!visitedSites.includes(siteUrl)) {
        // Increment the counter and store the new site
        const updatedCounter = privacyCounter + 1;
        const updatedSites = [...visitedSites, siteUrl];

        browser.storage.local.set({
          privacyCounter: updatedCounter,
          visitedSites: updatedSites
        });

        console.log(`Privacy policy detected on ${siteUrl}. Total count: ${updatedCounter}`);

        // Update the badge text
        browser.action.setBadgeText({
          text: updatedCounter.toString()
        });
      } else {
        console.log(`Privacy policy on ${siteUrl} has already been counted.`);
      }
    });
  }

  sendResponse();
});
