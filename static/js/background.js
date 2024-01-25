


chrome.contextMenus.create({
  title: "曾经沧海难为水，除却巫山不是云",
  id: '1012312',
  contexts: ['page'],
  onclick: function(params){
    chrome.notifications.create(null, {
      type: 'basic',
      iconUrl: '../../blogo.png',
      title: '春风若有怜花意',
      message: '可否许我再少年！'
    });
	}
}); 


chrome.browserAction.setBadgeText({text: 'new'});
chrome.browserAction.setBadgeBackgroundColor({color: [0, 0, 0]});


