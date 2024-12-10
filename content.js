// Check if the page contains the words "Privacy Policy"
if (document.body.innerText.includes("Privacy Policy")) {
  const siteUrl = window.location.hostname;

  // Send a message to the background script to update the counter
  chrome.runtime.sendMessage({ action: "checkPrivacyPolicy", site: siteUrl });
}
