const app = () => {

    let x;
    let y;

    const text = document.querySelector('p');
    //console.log(text);

    const mouseEvent = (event) => {
        x = event.clientX;
        y = event.clientY;

        text.innerText = 'x 좌표값 = ' + x + ' y좌표값 = ' + y;
    }

    window.addEventListener('mousemove', mouseEvent);

};

document.addEventListener('DOMContentLoaded', app);