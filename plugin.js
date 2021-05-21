const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('#num');
screen.value = '';
var n = 0;
buttons.forEach(element => {

    element.onclick = () => {
        if (screen.value == 'Error') {
            screen.value = '';
        }

        if (element.innerHTML == 'x') {
            screen.value += '*';
        } else {
            screen.value += element.innerHTML;
        }



    }
});
document.getElementById('last').onclick = () => {
    try {
        var xx = eval(screen.value);
        screen.value = xx;
    } catch (e) {
        screen.value = 'Error';
    }



}
document.getElementById('first').onclick = () => {
    screen.value = '';
}
document.getElementById('del').onclick = () => {
    if (screen.value == 'Error') {
        screen.value = '';
    } else {
        var i = screen.value.length;
        i--;
        var s = screen.value.substring(0, i);
        screen.value = s;
    }
}
document.getElementById('dot').onclick = () => {

    screen.value += '.';

}
function theme(background, font, screengb, buttonsbg, lastbtn) {
    document.querySelector('body').style.backgroundColor = background;
    document.querySelector('.center').style.backgroundColor = background;
    var x = document.querySelector('#numbers');
    for (let i = 0; i < 3; i++) {
        x.children[i].style.color = font;
    }
    var span = document.querySelector('span');
    var onlydiv = document.querySelector('#onlydiv');
    span.style.color = font;
    onlydiv.style.color = font;
    document.getElementById('screen').style.backgroundColor = screengb;
    for (let i = 0; i < 14; i++) {
        document.querySelectorAll('#num')[i].style.backgroundColor = buttonsbg;
        document.querySelectorAll('#num')[i].style.color = font;
    }

    document.getElementById('dot').style.backgroundColor = buttonsbg;
    document.getElementById('last').style.backgroundColor = lastbtn;

    document.getElementById('screen').style.color = font;


}

