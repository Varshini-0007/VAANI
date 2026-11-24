# Vaani: your personal friend (wHACKiest 2026, Make MCP Matter)

Voice assistant in Hindi, Kannada and English. Runs fully in the browser, no API keys.

## Run
    node server.js     # or: python3 -m http.server 8000   (Windows: start.bat, Mac/Linux: sh start.sh)
    # open http://localhost:8000 in Chrome or Edge (needed for voice input)

Without voice support, type in the box or tap the sample chips.

## Features
1. Approval guard: every write tool (calendar.create, messages.send, vault.put) is blocked until you approve by voice or button. Enforced in one place, `call()` in index.html.
2. Multilingual voice: switch English / हिंदी / ಕನ್ನಡ; Web Speech API for input and output.
3. Keep me on time: schedule readout, clash warning, 15-minute leave nudges.
4. Private vault: AES-GCM with PBKDF2 key from your PIN, stored encrypted on-device, PIN required on every read.
5. Family messages: "Tell Appa I reached" drafts in your language, guard reads it back before sending.

## MCP architecture
`TOOLS` is an MCP-style registry (name, read/write flag, handler). Tool calls are logged in the MCP panel.
To use real MCP servers, replace the handlers with calls to a Calendar or Messaging MCP server; the guard stays unchanged.

## Honest limits
- Intent parsing is rule-based (works offline); swap in an LLM for free-form speech.
- Messages go to a simulated outbox, not WhatsApp.
- Kannada and Hindi recognition quality depends on the browser.
- Chrome and Edge send voice-input audio to their own speech service. Typed input, the vault and all tool logic stay on-device.
- The MCP layer is MCP-style (a tool registry in the page), not a networked MCP server.

## Demo script (90 s)
Schedule in Kannada, add a reminder in Hindi and approve, "Tell Appa I reached" then say no, then approve, save and read back a locker code.
