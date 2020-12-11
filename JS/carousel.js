const images= ["carousel_img.png","carousel_img2_0.jpg","carousel_img3.jpg","carousel_img4.jpg","carousel_img5.PNG"];
const bannnerContent = document.querySelector(".banner-content");
const img = bannnerContent.querySelector("img");

let i = 0;
const main = ()=> {
    i = 1;
    setInterval(()=> {
        img.src=`images/${images[i]}`;
        i++;
        if (i >= images.length) {
            i = 0;
        }
    }, 5000);
}

main();


function left() {
    if (i <= 0) {
        i = images.length;
    }
    i--;
    return setImage();
}

function right() {
    if (i >= images.length - 1) {
        i = -1;
    }
    i++;
    return setImage();
}

function setImage() {
    return img.setAttribute('src', `images/${images[i]}`);
}


