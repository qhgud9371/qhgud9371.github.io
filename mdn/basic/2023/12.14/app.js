const app = () => {

    //Tab Event
    (() => {
        const tabEvent = document.querySelector('.tab-event');
        const tabItems = document.querySelectorAll('.tab-event__tab-item', tabEvent);
        const tabItemsActive = 'tab-event__tab-item--active';
        const contentLists = document.querySelectorAll('.tab-event__contents-list', tabEvent);
        const contentListsActive = 'tab-event__contents-list--active';
        const iframeItems = document.querySelectorAll('.tab-event__contents-list iframe');

        const iframeReset = (currentIframe) => {
            iframeItems.forEach((iframeItem, index) => {
                if (currentIframe === index) {
                    return;
                } else {
                    iframeItem.src += '';
                }
            });
        };

        const toggleEvent = (currentIndex) => {
            tabItems.forEach((tabItem, index) => {
                tabItem.classList[index === currentIndex ? 'add' : 'remove'](tabItemsActive);
            });

            contentLists.forEach((contentList, index) => {
                contentList.classList[index === currentIndex ? 'add' : 'remove'](contentListsActive);
            });
        };

        tabItems.forEach((tabItem, index) => {
            tabItem.addEventListener('click', (event) => {
                event.preventDefault();

                toggleEvent(index);
                iframeReset(index);
            });
        });
    })();

    //Select Event
    (() => {
        const selectWrap = document.querySelector('.select-event');
        const select = document.querySelector('select', selectWrap);
        const contents = document.querySelectorAll('.select-event__contents-list', selectWrap);
        const activeClass = 'select-event__contents-list--active';
        const videos = document.querySelectorAll('.select-event__contents-list iframe', selectWrap);

        const selectEvent = (currentItem) => {
            contents.forEach((item, index) => {
                item.classList[index === currentItem ? 'add' : 'remove'](activeClass);
            });
        };

        const videoReset = (currentVideo) => {
            videos.forEach((video, index) => {
                if (!index === currentVideo) {
                    return;
                } else {
                    video.src += '';
                }
            });
        };

        select.addEventListener('change', () => {
            // console.log(select.options[select.selectedIndex].value);
            // console.log(select.options[select.value]);

            selectEvent(select.options[select.selectedIndex].value * 1);
            //selectEvent(Number(select.options[select.selectedIndex].value));
            videoReset();
        });

    })();

};

document.addEventListener('DOMContentLoaded', app);