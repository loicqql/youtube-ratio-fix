const KEY = "YTBFIX";

function getData(callback) {
  chrome.storage.local.get([KEY], (e) => {
    if (!e.hasOwnProperty(KEY)) {
      chrome.storage.local.set({
        [KEY]: {
          'activate': true,
          'mode': 0
        }
      }, () => {
        getData();
      });
    } else {
      callback(e[KEY]);
    }
  });
}

function setData(data) {
  chrome.storage.local.set({
    [KEY]: data
  });
}

function sendMessage(name, value) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {[name]: value});
  });
}