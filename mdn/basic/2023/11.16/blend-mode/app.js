const app = () => {

    let x;
    let y;
    let mx = 0;
    let my = 0;
    let speed = 0.3;
    const text = document.querySelector('.text');
    const cursorItem = document.querySelector('.cursor-item');
    const menuItems = document.querySelectorAll('a');
    const activeClass = 'active';


    const activeEvent = () => {
        menuItems.forEach(menuItem => {
            menuItem.addEventListener('mouseover', () => {
                cursorItem.classList.add(activeClass);
            });

            menuItem.addEventListener('mouseout', () => {
                cursorItem.classList.remove(activeClass);
            });
        });
    };

    // const loop = () => {
    //     window.requestAnimationFrame(loop);
    // };

    const cursorEvent = () => {
        mx += (x - mx) * speed;
        my += (y - my) * speed;
        cursorItem.style.transform = "translate(" + mx + "px," + my + "px)";
    }

    const mouseEvent = (event) => {
        x = event.clientX;
        y = event.clientY;

        text.innerText = 'x: ' + x + ' y: ' + y;

        cursorEvent();
        activeEvent();
        // loop();
    }

    window.addEventListener('mousemove', mouseEvent);



};

document.addEventListener('DOMContentLoaded', app);