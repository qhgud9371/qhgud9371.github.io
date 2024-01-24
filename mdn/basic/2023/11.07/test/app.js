const app = () => {

    const tab = document.querySelector('.tab');
    const tabItems = document.querySelectorAll('.tab a', tab);
    const tabContents = document.querySelectorAll('.contents__item');
    const activeClass = 'active';
    const iframes = document.querySelectorAll('iframe');

    const resetEvent = (currentItem) => {
        iframes.forEach((item, index) => {
            if(currentItem === index) {
                return;
            }

            item.src = item.src
        });
    }

    const toggleEvent = (currentItem) => {

        tabItems.forEach((tabItem, index) => {
            tabItem.classList[index === currentItem ? "add" : "remove"](activeClass);

            // if(currentItem === index) {
            //     tabItem.classList.add(activeClass);
            // } else {
            //     tabItem.classList.remove(activeClass);
            // }
        });

        tabContents.forEach((tabContent, index) => {
            tabContent.classList[index === currentItem ? "add" : "remove"](activeClass);

            // if(currentItem === index) {
            //     tabContent.classList.add(activeClass);
            // } else {
            //     tabContent.classList.remove(activeClass);
            // }
        });

    }

    tabItems.forEach((tabItem, index) => {
        tabItem.addEventListener('click', (event) => {
            event.preventDefault();

            toggleEvent(index);
            resetEvent(index);
        });
    });


}

document.addEventListener("DOMContentLoaded", app);