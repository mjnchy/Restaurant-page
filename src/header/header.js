import "./header.css";

function header () {
        const header = document.createElement('h1');
        header.id = 'header';
        header.textContent = 'Humble Home';

        return header
}

function nav () {
        const nav = document.createElement('div');
        nav.classList.add('nav');

        const navbar = document.createElement('nav');
        navbar.classList.add('navbar-nav');

        const navUL = document.createElement('ul');
        navUL.classList.add('navbar-nav-list');

        let navLI = [];

        for (let i = 0; i < 3; i++) {
                navLI.push(document.createElement('li'));
        };

        navLI.forEach(li => {
                li.classList.add('nav-item');
                li.append(document.createElement('a'));
                navUL.append(li);
        });

        navLI[0].firstChild.textContent = 'Home';
        navLI[1].firstChild.textContent = 'Menu';
        navLI[2].firstChild.textContent = 'Contact';
        
        navLI.forEach(li => {
                li.firstChild.classList.add('nav-link');
                li.firstChild.id = li.firstChild.textContent.toLowerCase();
        });

        navbar.append(navUL);
        nav.append(navbar);

        return nav;
};

export {header, nav}