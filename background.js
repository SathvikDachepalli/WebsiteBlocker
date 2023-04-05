chrome.action.isEnabled(function (isEnabled) {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if (changeInfo.status === 'complete' && tab.active) {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: sniff,
            args: [tab.url,tabId]
          }).then((resp) => {
            console.log(resp[0].result);
          });
        }
      });
}
);

function sniff(url,tabId) {
  let flag=false;
  const sites = ["www.qorno.com/*"];
  for(let i=0;i<sites.length;i++){
    if(url.match(sites[i])){
      console.log("Matched");
      flag=true;
    }
  }
  const words=[/xxx/gi,/porn/gi,/sex/gi]
  
}