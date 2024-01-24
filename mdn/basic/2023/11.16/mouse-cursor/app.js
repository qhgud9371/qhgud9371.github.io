const app = () => {

    let x;
    let y;
    let mx = 0;
    let my = 0;
    let speed = 0.2;
    const text = document.querySelector('p');
    const cursorItem = document.querySelector('div');
    const loop = () => {
        mx += (x - mx) * speed;
        my += (y - my) * speed;
        cursorItem.style.transform = "translate(" + mx + "px," + my + "px)";
        // (현재 마우스 위치 - 바로 전 위치 값) * 속도;
        // 한번에 값을 더해주면 바로 움직이니깐 조금씩 작은 수를 더해줌

        //window.requestAnimationFrame()메서드는 애니메이션을 수행하고 싶다고 브라우저에 알려줌
        // window.requestAnimationFrame(loop);
    }

    const mouseEvent = (event) => {
        x = event.clientX;
        y = event.clientY;
        text.innerText = 'x 좌표값 = ' + x + ' y 좌표값 = ' + y;

        loop();
    }

    window.addEventListener('mousemove', mouseEvent);






};

document.addEventListener('DOMContentLoaded', app);