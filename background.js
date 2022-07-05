chrome.runtime.onMessage.addListener(
  function (request) {
    if (request.ytbFixFetch === 'GET') {
      getData((e) => {
        sendMessage('ytbFixSettingsActivate', e.activate ? "activate" : "disable");
        sendMessage('ytbFixSettingsMode', e.mode);
      });
    }
  }
);

