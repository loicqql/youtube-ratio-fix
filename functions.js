const KEY = "YTBFIX";

function getData(callback) {
  chrome.storage.local.get([KEY], (e) => {
    if (!e.hasOwnProperty(KEY)) {
      chrome.storage.local.set({
        [KEY]: {
          'isActivate': true,
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