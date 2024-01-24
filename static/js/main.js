const insertHTML = function(){
  // chrome标签页信息，sendMessage当前标签页的ID
  chrome.tabs.query({ active: true, currentWindow: true }, function (e) {
    console.log(e);
    chrome.tabs.sendMessage(e[0].id, { type: 'getVideoData',pageInfo:e });
  });

  chrome.runtime.onMessage.addListener(function (e, t, n) {
    console.log(e,t,n);
    const rootEl = document.getElementById('root')
    const downloadLink = document.createElement('a');
    downloadLink.href = e.result.data.durl[0].url
    downloadLink.download = e.videoData.title
    downloadLink.text= e.videoData.title
    rootEl.appendChild(downloadLink)
  })
}
insertHTML()
