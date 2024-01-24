const app = () => {

    const tab = document.querySelector('.tab');
    const tabItems = document.querySelectorAll('a', tab);
    const tabContents = document.querySelector('.contents');
    const tabContentItems = document.querySelectorAll('.contents__item', tabContents);
    const activeClass = 'active';
    const iframes = document.querySelectorAll('iframe');

    const stopIframes = (currentIndex) => {
        iframes.forEach((iframe, index) => {
            if(currentIndex === index) return;

            // iframe.src = iframe.src;
            iframe.src += "";
        })
    }

    const toggleTab = (currentIndex) => {
        tabItems.forEach((menu, index) => {
            menu.classList[currentIndex === index? 'add' : 'remove'](activeClass);
        })

        tabContentItems.forEach((content, index) => {
            content.classList[currentIndex === index? 'add' : 'remove'](activeClass);
        })
    }

    tabItems.forEach((tabItem, index) => {
        tabItem.addEventListener('click', () => {
            toggleTab(index);
            stopIframes();
        });
    })


}

document.addEventListener('DOMContentLoaded', app);