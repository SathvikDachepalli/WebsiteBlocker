document.getElementById("Expand").addEventListener("click", function(){
  //Open popup html in a new tab
  chrome.tabs.create({url: "../html/welcome.html"});
});

