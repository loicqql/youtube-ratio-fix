chrome.runtime.onMessage.addListener(
  function (request) {
    if (request.ytbFixFetch === 'GET') {
      getData((e) => {
        sendMessage('ytbFixSettingsActivate', e.isActivate ? "activate" : "disable");
        sendMessage('ytbFixSettingsMode', e.mode);
      });
    }
  }
);

function sendMessage(name, value) {
  chrome.runtime.sendMessage({[name]: value});
}

