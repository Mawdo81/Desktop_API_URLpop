chrome.runtime.onInstalled.addListener(() => {
    console.log("Bria Animana Integration extension installed.");
});

// Simulating Bria API event (You may need to integrate actual API calls)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "incoming_call") {
        let callerNumber = request.number || "unknown";
        let url = `https://lucy.animana.com/search?phoneNumber=${callerNumber}`;
        chrome.tabs.create({ url });
        sendResponse({ status: "URL Opened" });
    }
});
