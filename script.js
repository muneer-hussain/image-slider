let flag = 0;

function changer(x) {
    flag = flag + (x);
    slides(flag);

}


slides(flag);

function slides(num) {
    let images = document.getElementsByClassName('images');

    if (flag > images.length - 1) {
        flag = 0;
        num = 0;
    } else if (flag < 0) {
        flag = images.length - 1;
        num = images.length - 1;
    }

    for (items of images) {
        items.style.display = "none";
    }



    images[num].style.display = "block";
}