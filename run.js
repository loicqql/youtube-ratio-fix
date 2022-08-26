(function () {

  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  chrome.runtime.onMessage.addListener(
    function (request) {
      if(request.ytbFixSettingsActivate) {
        switch (request.ytbFixSettingsActivate) {
          case "activate":
            document.querySelector('body').classList.add('ytb-fix');
            break;
          case "disable":
            document.querySelector('body').classList.remove('ytb-fix');
            break;
          default:
            break;
        }
      }
      if(request.ytbFixSettingsMode) {
        switch (request.ytbFixSettingsMode) {
          case 0:
            document.querySelector('body').classList.remove('ytb-fix-mode-1');
            document.querySelector('body').classList.add('ytb-fix-mode-0');
            break;
          case 1:
            document.querySelector('body').classList.remove('ytb-fix-mode-0');
            document.querySelector('body').classList.add('ytb-fix-mode-1');
            break;
          default:
            break;
        }
      }
    }
  );

  function inject() {
    chrome.runtime.sendMessage({ytbFixFetch: 'GET'});
  }

  inject();
})()
