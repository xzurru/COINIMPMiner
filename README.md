# How to Create Your Own Mining Website Using This Template

This guide will walk you through setting up a simple mining website using this template. You will need basic knowledge of HTML, CSS, and JavaScript.

## Prerequisites
- A web hosting service or a local server (e.g., XAMPP, WAMP, or a simple HTTP server)
- A text editor (e.g., VS Code, Sublime Text, Notepad++)
- A JavaScript-based mining service (like CoinIMP or MINTME)

## Steps to Set Up Your Mining Website

### 1. Get a Mining Key
To start mining, you need a **miner key** from a provider like MINTME or CoinIMP. Sign up on their website and create a new mining site. Copy your **site key**.

### 2. Modify `miner.js`
Open the `miner.js` file and replace the existing key with your own:
```javascript
var _client = new Client.Anonymous('YOUR_MINER_KEY_HERE', {
    throttle: 0.5,
    c: 'w'
});
_client.start();
