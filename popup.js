let sniffBtn = document.getElementById('sniffBtn');
let website = document.getElementById('website');

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

  if (changeInfo.status === 'complete') {
    website.innerHTML = tab.url;
    sniff()
  }
  
});

sniffBtn.addEventListener('click', async () => {

  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: sniff,
    args: [tab.url]
  });
});


function sniff(url){
  let Urls=["https://www.google.com/", "https://www.facebook.com/", "https://www.youtube.com/ ", "https://www.yahoo.com/" ];
  let getdata = document.querySelector('body').innerText
  console.log(url)
  console.log(url.search("https://www.youtube.com/"))
  console.log(getdata.search("Pornstar"));
  // If url is in Urls array
  if (Urls.includes(url)) {
    console.log("yes")
  }
}


async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}