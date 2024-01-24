
const app2 = () => {

    const tab = document.querySelector('.tab');
    const tabItems = document.querySelectorAll('a', tab);
    const tabContents = document.querySelectorAll('.contents div');
    const activeClass = 'active';
    const iframes = document.querySelectorAll('iframe', tabContents);
    console.log(iframes);

    const stopEvent = (currentIframe) => {
        iframes.forEach((iframe, index) => {
            if(currentIframe === index) {
                return;
            }

            iframe.src = iframe.src;
        })
    }


    const toggleEvent = (currentIndex) => {
        tabItems.forEach((menu, index) => {
            menu.classList[currentIndex === index ? 'add' : 'remove'](activeClass);
        })
        tabContents.forEach((content, index) => {
            content.classList[currentIndex === index ? 'add' : 'remove'](activeClass);
        })
    }

    tabItems.forEach((menu, index) => {
        menu.addEventListener('click', (event) => {
            event.preventDefault();
            toggleEvent(index);
            stopEvent(index);
        })
    })



}


document.addEventListener('DOMContentLoaded', app2);

