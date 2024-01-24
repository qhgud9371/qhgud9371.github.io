const app = () => {

    const nav = document.querySelector('.main__nav');
    // const navMenus = document.querySelectorAll('a', nav);
    const navMenus = [...nav.querySelectorAll('a')];
    // console.log(navMenus);
    const sections = navMenus.reduce((sections, menu) => {
        const id = menu.hash;
        const section = document.getElementById(id.substring(1));

        sections[id] = section;

        console.log(id);
        console.log(section);

        return sections;
    }, {});
    console.log(sections);

    const reverseSections = Object.keys(sections).reverse().map(id => sections[id]);

    const getOffsetTop = (target) => Math.ceil(target.getBoundingClientRect().top + window.scrollY - nav.clientHeight);
    const moveMenu = (event) => {
        event.preventDefault();

        const id = event.target.closest('a').hash;
        const section = sections[id];
        const top = getOffsetTop(section);

        window.scroll({
            top,
            behavior: 'smooth'
        });

    };
    const onScroll = () => {
        let sectionIndex = reverseSections.findIndex(section => ~~(window.scrollY) >= getOffsetTop(section));
        console.log(sectionIndex);
        if (sectionIndex < 0) sectionIndex = navMenus.length - 1;

        const navIndex = navMenus.length - 1 - sectionIndex;
        console.log('navIndex = ' + navIndex);

        navMenus.forEach((menu, index) => menu.classList[navIndex === index ? 'add' : 'remove']('active'));

    };

    navMenus.forEach(menu => menu.addEventListener('click', moveMenu));
    window.addEventListener('scroll', onScroll);

};

document.addEventListener('DOMContentLoaded', app);