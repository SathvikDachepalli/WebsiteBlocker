chrome.action.isEnabled(function (isEnabled) {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if (changeInfo.status === 'complete' && tab.active) {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: sniff,
            args: [tab.url]
          }).then((resp) => {
            console.log("Blocked");
            console.log(resp[0].result)
              if(resp[0].result===true){
                console.log(tabId);
                chrome.tabs.create({
                  url: "html/redirect.html",
                  active: true,
                });
                chrome.tabs.remove(tab.id);
              }
          });
        }
      });
}
);

function sniff(url) {
  let flag=false;
  const sites = ["www.qorno.com/*","www.hypnotube.com/*"];
  for(let i=0;i<sites.length;i++){
    if(url.match(sites[i])){
      flag=true;
    }
  }
  const words=[/porn/gi,/hentai/gi]
  let getdata = document.querySelector('body').innerText
  for(let i=0;i<words.length;i++){
    if(getdata.match(words[i])){
      flag=true;
    }
  }
  if(flag){
    return true;
  }
  else{
    return false;
  }
}