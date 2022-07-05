window.addEventListener("DOMContentLoaded", (event) => {
  
  getData(init);


  document.querySelector('.checkbox-activate').addEventListener('change', (e) => {
    sendMessage('ytbFixSettingsActivate', e.target.checked ? "activate" : "disable");
    setData({
      'activate': e.target.checked,
      'mode': 0
    });    
  })

  function init(e) {
    sendMessage('ytbFixSettingsActivate', e.activate ? "activate" : "disable");
    document.querySelector('.checkbox-activate').checked = e.activate;
    sendMessage('ytbFixSettingsMode', e.mode);
  }

});