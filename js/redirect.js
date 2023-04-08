let redirectBtn = document.getElementById('click');

document.body.onload = function () {
    let status=document.getElementById('Status')
    let img=document.getElementById('image')
    var images = [ "../images/pikashock.jpg","../images/thunderbang.jpg","../images/pikacup.jpg", "../icon.png",];
    var statuses=["Pikachu is shooocked that you watched porn.","Dont Fuck your future like this.","Take a break from porn or ","Let Pikachu help you open your mind.",]
    var index = 0;

    function changeImage() {
      img.src = images[index];
      
      status.innerText=statuses[index];
      index = (index + 1) % images.length;
    }
    changeImage();
    setInterval(changeImage, 5000); 
};