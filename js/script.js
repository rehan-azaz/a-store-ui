
var bgArr = ["img/Mask-Group-4.png", "img/Mask-Group-5.png", "img/Mask-Group-6.png"];
var i = 0;
document.querySelector("#slider").style.backgroundSize = "cover";

document.querySelector("#slider").style.backgroundImage= "url("+bgArr[i]+")";
var interval = self.setInterval("swapBkgnd()", 3000)

function swapBkgnd() {
    i++;

    if(i >= bgArr.length){
        i=0
    }
    document.querySelector("#slider").style.backgroundImage= "url("+bgArr[i]+")";

};