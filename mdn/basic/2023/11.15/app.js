const app = () => {

    const tab = document.querySelector('.main__tab');
    const menus = document.querySelectorAll('.main__tab-item', tab);
    const tabContentsLists = document.querySelectorAll('.main__contents-item');
    const iframes = document.querySelectorAll('iframe');
    const menuActive = 'main__tab-item--active'
    const contentActive = 'main__contents-item--active'

    const resetEvent = (currentIndex) => {
        iframes.forEach((item, index) => {
            if(index === currentIndex) {
                return;
            }

            item.src = item.src;
        });
    };

    const toggleEvent = (currentIndex) => {
        menus.forEach((menu, index) => {
            menu.classList[index === currentIndex ? 'add' : 'remove'](menuActive);
        });

        tabContentsLists.forEach((contentItem, index) => {
            contentItem.classList[index === currentIndex ? 'add' : 'remove'](contentActive);
        });
    };


    menus.forEach((menu, index) => {
        menu.addEventListener('click', () => {
            // console.log(index);
            toggleEvent(index);
            resetEvent(index);
        });
    });

}

document.addEventListener('DOMContentLoaded', app);