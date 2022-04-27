window.addEventListener("DOMContentLoaded", (event) => {
  
  getData(init);


  document.querySelector('.checkbox-activate').addEventListener('change', (e) => {
    sendMessage('ytbFixSettingsActivate', e.target.checked ? "activate" : "disable");    
  })

  function init(e) {
    sendMessage('ytbFixSettingsActivate', e.isActivate ? "activate" : "disable");
    sendMessage('ytbFixSettingsMode', e.mode);
  }

  function sendMessage(name, value) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {[name]: value});
    });
  }

});